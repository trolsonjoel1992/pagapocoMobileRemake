import { useImages } from '@/src/context/ImageContext';
import { Publication, usePublication } from '@/src/context/PublicationContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { router } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';

export const useMyPublication = (publication: Publication) => {
  const { getImages } = useImages();
  const { updatePublicationById, setPublication, deletePublicationById } =
    usePublication();
  const [firstImage, setFirstImage] = useState<string | null>(null);
  const [isSold, setIsSold] = useState(publication.isSold || false);
  const [isPaused, setIsPaused] = useState(publication.isPaused || false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Sincronizar estados con la publicación cuando cambia
  useEffect(() => {
    setIsSold(publication.isSold || false);
    setIsPaused(publication.isPaused || false);
  }, [publication.isSold, publication.isPaused]);

  useFocusEffect(
    useCallback(() => {
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
    }, [publication.id])
  );
  const handlePause = useCallback(async () => {
    setIsPaused(true);
    await updatePublicationById(publication.id, { isPaused: true });
  }, [publication.id, updatePublicationById]);
  const handlePlay = useCallback(async () => {
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
    router.push({
      pathname: '/(myPublications)/upgradePrem',
      params: { id: publication.id },
    });
  }, [publication.id]);
  const handleView = useCallback(() => {
    router.push({
      pathname: '/(myPublications)/myPublication',
      params: { id: publication.id },
    });
  }, [publication.id]);
  return {
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
    handleView,
  };
};
