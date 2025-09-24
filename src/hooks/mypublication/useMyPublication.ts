import { useImages } from '@/src/context/ImageContext';
import { Publication, usePublication } from '@/src/context/PublicationContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';

export const useMyPublication = (publication: Publication) => {
  const { getImages } = useImages();
  const { updatePublicationById, setPublication, deletePublicationById } =
    usePublication();
  const [modalVisible, setModalVisible] = useState(false);
  const [firstImage, setFirstImage] = useState<string | null>(null);
  const [isSold, setIsSold] = useState(publication.isSold || false);
  const [isPaused, setIsPaused] = useState(publication.isPaused || false);
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    let isMounted = true;
    const loadFirstImage = async () => {
      try {
        const images = await getImages(publication.id);
        if (isMounted && images.length > 0) {
          setFirstImage(images[0]);
        }
      } catch (error) {
        if (isMounted) {
          console.error('Error loading first image:', error);
        }
      }
    };
    loadFirstImage();
    return () => {
      isMounted = false;
    };
  }, [publication.id]);
  const handlePause = useCallback(async () => {
    setModalVisible(true);
    setIsPaused(true);
    await updatePublicationById(publication.id, { isPaused: true });
  }, [publication.id, updatePublicationById]);
  const handlePlay = useCallback(async () => {
    setModalVisible(false);
    setIsPaused(false);
    await updatePublicationById(publication.id, { isPaused: false });
  }, [publication.id, updatePublicationById]);
  const handleSell = useCallback(async () => {
    setIsSold(true);
    await updatePublicationById(publication.id, { isSold: true });
  }, [publication.id, updatePublicationById]);
  const handleNewSell = useCallback(async () => {
    setIsSold(false);
    await updatePublicationById(publication.id, {
      isSold: false,
    });
  }, [publication.id, updatePublicationById]);
  const handleDelete = useCallback(async () => {
    try {
      setIsDeleting(true);
      await deletePublicationById(publication.id);
    } catch (error) {
    } finally {
      setIsDeleting(false);
    }
  }, [publication.id, deletePublicationById]);
  const handleEdit = useCallback(async () => {
    try {
      setPublication(publication);
      await AsyncStorage.setItem(
        'editingPublication',
        JSON.stringify(publication)
      );
      router.push('/(myPublications)/editPublication');
    } catch (error) {
      console.error('Error al preparar edición:', error);
    }
  }, [publication, setPublication]);
  const handleUpgrade = useCallback(() => {
    console.log('Upgrade publicación:', publication.id);
  }, [publication.id]);
  return {
    modalVisible,
    firstImage,
    isSold,
    isPaused,
    isDeleting,
    handlePause,
    handlePlay,
    handleSell,
    handleNewSell,
    handleDelete,
    handleEdit,
    handleUpgrade,
  };
};
