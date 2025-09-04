import ButtonMax from '@/src/components/atom/buttons/buttonMax';
import CardPictureP from '@/src/components/atom/cards/profile/cardPictureP';
import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import ModalContainer from '@/src/components/molecule/modal/modalContainer';
import { useAuth } from '@/src/context/AuthContext';
import { useTheme } from '@/src/context/ThemeContext';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Picture = () => {
  const { colors, theme } = useTheme();
  const { user, updateProfileImage, deleteProfileImage } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<'delete' | 'success'>('delete');

  const handleTakePhoto = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('Permiso requerido', 'Necesitamos acceso a la cámara');
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        await updateProfileImage(result.assets[0].uri);
        setModalType('success');
        setModalVisible(true);
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo tomar la foto');
    }
  };

  const handleSelectImage = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('Permiso requerido', 'Necesitamos acceso a la galería');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        await updateProfileImage(result.assets[0].uri);
        setModalType('success');
        setModalVisible(true);
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo seleccionar la imagen');
    }
  };

  const handleDeletePhoto = async () => {
    setModalType('delete');
    if (!user?.profileImage) {
      setModalVisible(true);
      return;
    }
    setModalVisible(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteProfileImage();
      setModalVisible(false);
      router.back();
    } catch (error) {
      Alert.alert('Error', 'No se pudo eliminar la foto');
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
    if (modalType === 'success') {
      router.back();
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HeaderGeneric title='Foto de perfil' onBackPress={() => router.back()} />
      <CardPictureP
        icon={theme === 'dark' ? 'cameraD' : 'camera'}
        title='Tomar foto'
        onPress={handleTakePhoto}
      />
      <CardPictureP
        icon={theme === 'dark' ? 'galleryD' : 'gallery'}
        title='Subir foto'
        onPress={handleSelectImage}
      />
      <CardPictureP
        icon={theme === 'dark' ? 'trashD' : 'trash'}
        title='Eliminar foto'
        onPress={handleDeletePhoto}
      />
      <ButtonMax
        action='Regresar a perfil'
        onPress={() => router.push('/(tabs)/home')}
      />

      <Modal
        visible={modalVisible}
        transparent
        animationType='slide'
        onRequestClose={handleModalClose}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ModalContainer
            modalImage={modalType === 'delete' ? 'modalWarning' : 'modalCheck'}
            message={
              modalType === 'delete'
                ? user?.profileImage
                  ? '¿Estás seguro de que quieres eliminar tu foto de perfil?'
                  : 'No hay foto de perfil para eliminar'
                : 'Foto actualizada correctamente'
            }
            buttonCancel={
              modalType === 'delete' && user?.profileImage ? true : false
            }
            buttonAction={
              modalType === 'delete'
                ? user?.profileImage
                  ? 'Eliminar'
                  : 'Aceptar'
                : 'Aceptar'
            }
            onPressCancel={() => setModalVisible(false)}
            onPressButtonAction={() => {
              if (modalType === 'delete') {
                if (user?.profileImage) {
                  handleConfirmDelete();
                } else {
                  setModalVisible(false);
                }
              } else {
                handleModalClose();
              }
            }}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Picture;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
