import { useImages } from '@/src/context/ImageContext';
import { usePublication } from '@/src/context/PublicationContext';
import { useTheme } from '@/src/context/ThemeContext';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Alert } from 'react-native';

export const useCardPictureS = (
  images: string[],
  setImages: React.Dispatch<React.SetStateAction<string[]>>
) => {
  const { colors, theme } = useTheme();
  const { publication } = usePublication();
  const { addImage, error, deleteImage } = useImages();
  const [attempts, setAttempts] = useState<number>(
    publication?.isPremium ? 8 : 4
  );
  const [buttonPressed, setButtonPressed] = useState(false);
  const [newImageUri, setNewImageUri] = useState<string | null>(null);

  const requestPermissions = async (mode: 'camera' | 'gallery') => {
    if (mode === 'camera') {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      return status === 'granted';
    } else {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      return status === 'granted';
    }
  };

  const handleDeleteImage = async (imageUri: string) => {
    if (!publication?.id) return;
    setImages(prev => prev.filter(uri => uri !== imageUri));
    setAttempts(prev => prev + 1);
  };

  const checkImageLimit = () => {
    if (attempts <= 0) {
      Alert.alert('Límite alcanzado');
      return false;
    }
    return true;
  };

  const handleSelectImage = async (mode: 'camera' | 'gallery') => {
    if (!publication?.id) {
      Alert.alert('Error', 'No se puede agregar imágenes en este momento');
      return;
    }
    if (!checkImageLimit()) return;

    try {
      const options: ImagePicker.ImagePickerOptions = {
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.7,
      };

      const result =
        mode === 'camera'
          ? await ImagePicker.launchCameraAsync(options)
          : await ImagePicker.launchImageLibraryAsync(options);

      if (!result.canceled && result.assets[0].uri) {
        setImages(prev => [...prev, result.assets[0].uri]);
        setNewImageUri(result.assets[0].uri);
        setAttempts(prev => prev - 1);
      }
    } catch (error) {
      console.error('Error selecting image:', error);
      Alert.alert('Error', 'No se pudo seleccionar la imagen');
    }
  };

  const getTitleText = () => {
    if (attempts <= 0) {
      return 'Límite alcanzado';
    }
    return 'Subí tus fotos aquí';
  };

  const getSubtitleText = () => {
    if (attempts <= 0) {
      return buttonPressed
        ? 'Ya no podés agregar más'
        : 'Elimina y cambia las fotos';
    }
    return 'archivo jpeg, jpg o png.';
  };

  const handleDisabledPress = () => {
    setButtonPressed(true);
  };

  return {
    colors,
    theme,
    images,
    attempts,
    buttonPressed,
    newImageUri,
    handleDeleteImage,
    handleSelectImage,
    getTitleText,
    getSubtitleText,
    handleDisabledPress,
  };
};
