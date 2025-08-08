import ButtonProfile from '@/src/components/atom/buttons/profile/buttonProfile';
import ModalContainer from '@/src/components/molecule/modal/modalContainer';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Modal, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const ProfileButtons = () => {
  const { theme } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<'delete' | 'logout' | null>(null);

  const handlePressDelete = () => {
    setModalType('delete');
    setModalVisible(true);
  };

  const handlePressLogout = () => {
    setModalType('logout');
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
    setModalType(null);
  };

  const handleAction = () => {
    setModalVisible(false);
    setModalType(null);
    if (modalType === 'delete') {
      // Lógica para eliminar cuenta
    } else if (modalType === 'logout') {
      // Lógica para cerrar sesión
    }
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        gap: moderateScale(30),
      }}
    >
      <ButtonProfile
        title='Información de la cuenta'
        icon={theme === 'dark' ? 'darkInfo' : 'iconInfo'}
        onPress={() => router.push('/(profile)/information')}
      />
      <ButtonProfile
        title='Configuracion'
        icon={theme === 'dark' ? 'darkSetting' : 'iconSetting'}
        onPress={() => router.push('/(profile)/setting')}
      />
      <ButtonProfile
        title='Privacidad'
        icon={theme === 'dark' ? 'darkPrivacy' : 'iconPrivacy'}
        onPress={() => router.push('/(profile)/privacy')}
      />
      <ButtonProfile
        title='Foto de perfil'
        icon={theme === 'dark' ? 'darkPicture' : 'iconPicture'}
        onPress={() => router.push('/(profile)/picture')}
      />
      <ButtonProfile
        title='Eliminar cuenta'
        icon={theme === 'dark' ? 'darkDelete' : 'iconDelete'}
        onPress={handlePressDelete}
      />
      <ButtonProfile
        title='Cerrar sesión'
        icon={theme === 'dark' ? 'darkClose' : 'iconClose'}
        onPress={handlePressLogout}
      />

      <Modal
        visible={modalVisible}
        transparent
        animationType='fade'
        onRequestClose={handleCancel}
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
            modalImage={
              modalType === 'delete' ? 'modalQuestion' : 'modalWarning'
            }
            message={
              modalType === 'delete'
                ? '¿Estás seguro que deseas eliminar tu cuenta?'
                : '¿Deseas cerrar sesión?'
            }
            buttonCancel={true}
            buttonAction={modalType === 'delete' ? 'Eliminar' : 'Cerrar sesión'}
            onPressCancel={handleCancel}
            onPressButtonAction={handleAction}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ProfileButtons;
