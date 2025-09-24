import ModalContainer from '@/src/components/molecule/modal/modalContainer';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { Modal, View } from 'react-native';
type Props = {
  pressCancel: () => void;
  pressAction: () => void;
  visible?: boolean;
};
const ModDelete: React.FC<Props> = ({ pressCancel, pressAction, visible }) => {
  const { colors } = useTheme();
  return (
    <Modal
      visible={visible}
      transparent
      animationType='slide'
      onRequestClose={pressCancel}
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
          modalImage='modalWarning'
          message='¿Estás seguro de que deseas eliminar esta publicación? Esta acción no se puede deshacer.'
          buttonCancel={true}
          buttonAction={'Eliminar'}
          onPressCancel={pressCancel}
          onPressButtonAction={pressAction}
        />
      </View>
    </Modal>
  );
};
export default ModDelete;
