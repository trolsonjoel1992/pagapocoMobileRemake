import { usePublication } from '@/src/context/PublicationContext';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';

export const useSell = () => {
  const { publication, updatePublication, addPublication } = usePublication();
  // Estados del formulario
  const [title, setTitle] = useState(publication?.title || '');
  const [city, setCity] = useState(publication?.city || '');
  const [price, setPrice] = useState(publication?.price || '');
  const [modalVisible, setModalVisible] = useState(false);
  // Estados de validación
  const [isTitleValid, setIsTitleValid] = useState(false);
  const [isCityValid, setIsCityValid] = useState(false);
  const [isPriceValid, setPriceValid] = useState(false);
  // Validación del formulario
  const isFormValid = isTitleValid && isCityValid && isPriceValid;
  // Función para limpiar todos los estados
  const clearFormData = () => {
    setTitle('');
    setCity('');
    setPrice('');
    setIsTitleValid(false);
    setIsCityValid(false);
    setPriceValid(false);
    setModalVisible(false);
  };
  // Manejar la creación de la publicación
  const handleCreatePublication = async () => {
    if (!publication) return;
    try {
      const finalPublication = {
        ...publication,
        title,
        city,
        price,
        isSold: false,
        isPaused: false,
      };
      await addPublication(finalPublication);
      // Limpiar formulario después de crear exitosamente
      clearFormData();
      setModalVisible(false);
      router.push('/(tabs)/home');
    } catch (error) {
      console.error('Error saving publication:', error);
      throw error; // Re-lanzar para manejo en el componente si es necesario
    }
  };
  // Manejar el botón continuar
  const handleContinue = () => {
    if (isFormValid) {
      updatePublication({
        title,
        city,
        price,
      });
      setModalVisible(true);
    }
  };
  // Limpiar datos al desmontar el componente
  useEffect(() => {
    return () => {
      clearFormData();
    };
  }, []);
  return {
    // Estados
    title,
    city,
    price,
    modalVisible,
    isFormValid,
    isTitleValid,
    isCityValid,
    isPriceValid,
    // Setters
    setTitle,
    setCity,
    setPrice,
    setModalVisible,
    setIsTitleValid,
    setIsCityValid,
    setPriceValid,
    // Funciones
    handleCreatePublication,
    handleContinue,
    clearFormData,
  };
};
