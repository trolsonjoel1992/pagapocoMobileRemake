import ButtonIcon from '@/src/components/atom/buttons/buttonIcon';
import ButtonIconDis from '@/src/components/atom/buttons/buttonIconDis'; // Add this import
import ContainerPicture from '@/src/components/atom/cards/sell/containerPicture';
import {
  globalBorderRadius,
  globalFontSizeMid,
  globalFontSizeTitle,
  globalFontWeightBold,
} from '@/src/constants/styles/globalStyles';
import { useImages } from '@/src/context/ImageContext';
import { usePublication } from '@/src/context/PublicationContext';
import { useTheme } from '@/src/context/ThemeContext';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const CardPicture = () => {
  const { colors, theme } = useTheme();
  const { publication } = usePublication();
  const { images, addImage, error, deleteImage } = useImages();
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

    await deleteImage(publication.id, imageUri);
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
        const success = await addImage(
          publication.id,
          result.assets[0].uri,
          publication.isPremium || false
        );

        if (success) {
          setNewImageUri(result.assets[0].uri);
          setAttempts(prev => prev - 1);
        } else if (error) {
          Alert.alert('Error', error);
        }
      }
    } catch (error) {
      console.error('Error selecting image:', error);
      Alert.alert('Error', 'No se pudo seleccionar la imagen');
    }
  };

  const renderImage = ({
    item: uri,
    index,
  }: {
    item: string;
    index: number;
  }) => (
    <ContainerPicture
      key={`${uri}_${index}`}
      imageUri={uri}
      onDelete={() => handleDeleteImage(uri)}
      isNewImage={uri === newImageUri}
    />
  );

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

  return (
    <View
      style={{
        backgroundColor: colors.background,
        alignItems: 'center',
        height: '50%',
        width: '90%',
      }}
    >
      <View
        style={{
          backgroundColor: colors.backgroundBCI,
          borderColor: colors.textPrimary,
          borderRadius: globalBorderRadius,
          borderWidth: moderateScale(2),
          padding: moderateScale(20),
          borderStyle: 'dashed',
          height: 'auto',
          width: '100%',
        }}
      >
        <Text
          style={{
            fontWeight: globalFontWeightBold,
            marginBottom: moderateScale(8),
            fontSize: globalFontSizeTitle,
            color: colors.textPrimary,
            textAlign: 'center',
          }}
        >
          {getTitleText()}
        </Text>
        <Text
          style={{
            fontSize: globalFontSizeMid,
            color:
              buttonPressed && attempts <= 0
                ? colors.error
                : colors.textPrimary,
            textAlign: 'center',
          }}
        >
          {getSubtitleText()}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: moderateScale(75),
            marginTop: moderateScale(15),
          }}
        >
          {attempts <= 0 ? (
            <>
              <ButtonIconDis
                iconSource={'opnCameraDis'}
                onPress={handleDisabledPress}
              />
              <ButtonIconDis
                iconSource={'uploadDis'}
                onPress={handleDisabledPress}
              />
            </>
          ) : (
            <>
              <ButtonIcon
                iconSource={theme === 'dark' ? 'opnCameraD' : 'opnCamera'}
                onPress={() => handleSelectImage('camera')}
              />
              <ButtonIcon
                iconSource={theme === 'dark' ? 'uploadD' : 'upload'}
                onPress={() => handleSelectImage('gallery')}
              />
            </>
          )}
        </View>

        {images.length > 0 && (
          <FlatList
            data={images}
            renderItem={renderImage}
            keyExtractor={(uri, index) => `${uri}_${index}`}
            numColumns={2}
            style={{
              height: moderateScale(200),
              marginTop: moderateScale(10),
            }}
            columnWrapperStyle={{
              gap: moderateScale(10),
              justifyContent: 'space-evenly',
            }}
            contentContainerStyle={{
              gap: moderateScale(10),
              paddingVertical: moderateScale(15),
            }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

export default CardPicture;
