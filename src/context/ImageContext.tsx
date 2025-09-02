import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useState } from 'react';

type ImageContextType = {
  images: string[];
  loading: boolean;
  error: string | null;
  addImage: (
    publicationId: string,
    imageUri: string,
    isPremium: boolean
  ) => Promise<boolean>;
  getImages: (publicationId: string) => Promise<string[]>;
  clearImages: (publicationId: string) => Promise<void>;
  deleteImage: (publicationId: string, imageUri: string) => Promise<void>;
};

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addImage = async (
    publicationId: string,
    imageUri: string
  ): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      const key = `images_${publicationId}`;
      const savedImages = await AsyncStorage.getItem(key);
      const imagesArray = savedImages ? JSON.parse(savedImages) : [];

      if (imagesArray.includes(imageUri)) {
        return false;
      }

      const newImages = [...imagesArray, imageUri];
      await AsyncStorage.setItem(key, JSON.stringify(newImages));
      setImages(newImages);
      return true;
    } catch (error) {
      setError('Error al guardar la imagen');
      console.error('Error saving image:', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const getImages = async (publicationId: string): Promise<string[]> => {
    setLoading(true);
    try {
      const savedImages = await AsyncStorage.getItem(`images_${publicationId}`);
      const imagesArray = savedImages ? JSON.parse(savedImages) : [];
      setImages(imagesArray);
      return imagesArray;
    } catch (error) {
      setError('Error al obtener las imágenes');
      console.error('Error getting images:', error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const deleteImage = async (publicationId: string, imageUri: string) => {
    setLoading(true);
    try {
      const savedImages = await AsyncStorage.getItem(`images_${publicationId}`);
      const imagesArray = savedImages ? JSON.parse(savedImages) : [];
      const newImages = imagesArray.filter((uri: string) => uri !== imageUri);

      await AsyncStorage.setItem(
        `images_${publicationId}`,
        JSON.stringify(newImages)
      );
      setImages(newImages);
    } catch (error) {
      setError('Error al eliminar la imagen');
      console.error('Error deleting image:', error);
    } finally {
      setLoading(false);
    }
  };

  const clearImages = async (publicationId: string) => {
    setLoading(true);
    try {
      await AsyncStorage.removeItem(`images_${publicationId}`);
      setImages([]);
    } catch (error) {
      setError('Error al limpiar las imágenes');
      console.error('Error clearing images:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageContext.Provider
      value={{
        images,
        loading,
        error,
        addImage,
        getImages,
        clearImages,
        deleteImage,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImages must be used within an ImageProvider');
  }
  return context;
};
