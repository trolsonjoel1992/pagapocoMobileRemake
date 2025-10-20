import { useImages } from '@/src/context/ImageContext';
import { usePublication } from '@/src/context/PublicationContext';
import { useTheme } from '@/src/context/ThemeContext';
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

export const useCardPictureE = (
  images: string[],
  setImages: React.Dispatch<React.SetStateAction<string[]>>
) => {
  const { colors, theme } = useTheme();
  const { publication } = usePublication();
  const { addImage, deleteImage } = useImages();
  const [buttonPressed, setButtonPressed] = useState(false);
  const [newImageUri, setNewImageUri] = useState<string | null>(null);

  // Calcular intentos restantes basados en las imágenes actuales
  const getAttemptsRemaining = () => {
    const limit = publication?.isPremium ? 8 : 4;
    return limit - images.length;
  };

  const [attempts, setAttempts] = useState<number>(getAttemptsRemaining());

  // Actualizar intentos cuando cambian las imágenes
  useEffect(() => {
    setAttempts(getAttemptsRemaining());
  }, [images.length, publication?.isPremium]);

  const handleDeleteImage = async (imageUri: string) => {
    if (!publication?.id) return;

    try {
      // Eliminar de AsyncStorage
      await deleteImage(publication.id, imageUri);
      // Actualizar estado local
      setImages(prev => prev.filter(uri => uri !== imageUri));
      setAttempts(prev => prev + 1);
    } catch (error) {
      console.error('Error deleting image:', error);
      Alert.alert('Error', 'No se pudo eliminar la imagen');
    }
  };

  const checkImageLimit = () => {
    if (attempts <= 0) {
      const limit = publication?.isPremium ? 8 : 4;
      Alert.alert(
        'Límite alcanzado',
        publication?.isPremium
          ? `Ya tenés ${limit} imágenes. Eliminá alguna para agregar una nueva.`
          : `Alcanzaste el límite de ${limit} imágenes. Pasate a Premium para subir más.`
      );
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
        const newImageUri = result.assets[0].uri;

        // Guardar en AsyncStorage
        const success = await addImage(
          publication.id,
          newImageUri,
          publication.isPremium || false
        );

        if (success) {
          // Actualizar estado local
          setImages(prev => [...prev, newImageUri]);
          setNewImageUri(newImageUri);
          setAttempts(prev => prev - 1);
        } else {
          Alert.alert('Error', 'No se pudo guardar la imagen');
        }
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
    return 'Editá tus fotos aquí';
  };

  const getSubtitleText = () => {
    if (attempts <= 0) {
      return buttonPressed
        ? 'Ya no podés agregar más'
        : 'Elimina una foto para agregar otra';
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
