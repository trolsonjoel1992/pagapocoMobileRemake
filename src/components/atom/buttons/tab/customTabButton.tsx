import ModalContainer from '@/src/components/molecule/modal/modalContainer';
import { useAuth } from '@/src/context/AuthContext';
import { router, usePathname } from 'expo-router';
import React, { useState } from 'react';
import {
  GestureResponderEvent,
  Modal,
  TouchableOpacity,
  View,
} from 'react-native';
interface CustomTabButtonProps {
  children: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  accessibilityState?: {
    selected?: boolean;
  };
  style?: any;
  testID?: string;
  to?: string;
  href?: string;
  routeName: string;
}

const CustomTabButton: React.FC<CustomTabButtonProps> = ({
  children,
  onPress,
  accessibilityState,
  style,
  testID,
  routeName,
  ...otherProps
}) => {
  const pathname = usePathname();
  const { user } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);

  const isSelected =
    pathname === `/${routeName}` ||
    pathname.endsWith(`/${routeName}`) ||
    pathname === routeName ||
    (pathname === '/' && routeName === 'home');

  const handlePress = (event: any) => {
    if (user || routeName === 'home') {
      onPress?.(event);
    } else {
      setModalVisible(true);
    }
  };
  const handleGoToLogin = () => {
    setModalVisible(false);
    router.push('/(auth)/fullLogin');
  };

  return (
    <>
      <TouchableOpacity
        onPress={handlePress}
        testID={testID}
        style={[
          {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: user || routeName === 'home' ? 1 : 1,
          },
          style,
        ]}
        activeOpacity={0.3}
        {...otherProps}
      >
        {children}
        {user && isSelected && (
          <View
            style={{
              position: 'absolute',
              top: -8,
              left: 0,
              right: 0,
              bottom: -6,
              backgroundColor: 'rgba(45, 45, 45, 0.3)',
              pointerEvents: 'none',
            }}
          />
        )}
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent
        animationType='slide'
        onRequestClose={() => setModalVisible(false)}
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
            modalImage={'modalWarning'}
            message={'Para usar esta función, debes iniciar sesión.'}
            buttonCancel={true}
            buttonAction={'Ingresar'}
            onPressCancel={() => setModalVisible(false)}
            onPressButtonAction={() => {
              setModalVisible(false);
              handleGoToLogin();
            }}
          />
        </View>
      </Modal>
    </>
  );
};

export default CustomTabButton;
