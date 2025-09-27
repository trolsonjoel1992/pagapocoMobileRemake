import ModalContainer from '@/src/components/molecule/modal/modalContainer';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Modal, View } from 'react-native';

type Props = {
  modalVisible: boolean;
  cancelAction: (visible: boolean) => void;
  confirmAction: () => void;
};

const ModalTitle = ({ modalVisible, cancelAction, confirmAction }: Props) => {
  const { colors } = useTheme();

  return (
    <Modal
      visible={modalVisible}
      transparent
      animationType='slide'
      onRequestClose={() => cancelAction(false)}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: colors.modal,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ModalContainer
          modalImage={'modalCheck'}
          message={'¡Muy bien, creaste tu publicación!'}
          buttonCancel={false}
          buttonAction={'Publicar'}
          onPressButtonAction={confirmAction}
        />
      </View>
    </Modal>
  );
};

export default ModalTitle;
