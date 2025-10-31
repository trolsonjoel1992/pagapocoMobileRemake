import { usePublication } from '@/src/context/PublicationContext';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';

export const useEditTitle = () => {
  const { publication, updatePublicationById } = usePublication();

  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');
  const [isTitleValid, setIsTitleValid] = useState(false);
  const [isCityValid, setIsCityValid] = useState(false);
  const [isPriceValid, setPriceValid] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  // Cargar datos de la publicación
  useEffect(() => {
    if (publication) {
      setTitle(publication.title || '');
      setCity(publication.city || '');
      setPrice(publication.price || '');
      // Validar los campos iniciales
      setIsTitleValid((publication.title || '').trim().length > 0);
      setIsCityValid((publication.city || '').trim().length > 0);
      setPriceValid((publication.price || '').trim().length > 0);
    }
  }, [publication]);

  // Detectar cambios
  useEffect(() => {
    if (publication) {
      const changed =
        title !== (publication.title || '') ||
        city !== (publication.city || '') ||
        price !== (publication.price || '');
      setHasChanges(changed);
    }
  }, [title, city, price, publication]);

  const isFormValid = isTitleValid && isCityValid && isPriceValid;

  const handleSave = async () => {
    if (!publication?.id) {
      return;
    }

    if (!isFormValid) {
      return;
    }

    if (!hasChanges) {
      router.back();
      return;
    }

    try {
      await updatePublicationById(publication.id, {
        title,
        city,
        price,
      });
      router.back();
    } catch (error) {
      console.error('Error updating title/price:', error);
    }
  };

  return {
    title,
    setTitle,
    city,
    setCity,
    price,
    setPrice,
    isTitleValid,
    setIsTitleValid,
    isCityValid,
    setIsCityValid,
    isPriceValid,
    setPriceValid,
    isFormValid,
    hasChanges,
    handleSave,
  };
};
