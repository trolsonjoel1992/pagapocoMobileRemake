import ModalContainer from '@/src/components/molecule/modal/modalContainer';
import { useAuth } from '@/src/context/AuthContext';
import { router, usePathname } from 'expo-router';
import React, { useState } from 'react';
import {
  GestureResponderEvent, // Tipo usado en la declaración de props (onPress)
  Modal,
  TouchableOpacity,
  View,
} from 'react-native';

// Declaración de las props que recibe el botón de tab
interface CustomTabButtonProps {
  children: React.ReactNode; // Usado como {children} en el render
  onPress?: (event: GestureResponderEvent) => void; // Usado como {onPress} y en handlePress
  accessibilityState?: {
    selected?: boolean;
  }; // Usado como {accessibilityState} (no usado en este código, pero disponible)
  style?: any; // Usado como {style} en el render
  testID?: string; // Usado como {testID} en el render
  to?: string; // No usado en este código, pero disponible
  href?: string; // No usado en este código, pero disponible
  routeName: string; // Usado como {routeName} en el render y lógica de navegación
}

const CustomTabButton: React.FC<CustomTabButtonProps> = ({
  children, // Renderiza el contenido del botón
  onPress, // Función que se ejecuta al presionar el botón
  accessibilityState,
  style, // Estilo personalizado del botón
  testID, // Identificador de test
  routeName, // Nombre de la ruta/tab
  ...otherProps
}) => {
  const pathname = usePathname(); // Obtiene la ruta actual para saber si la tab está seleccionada
  const { user } = useAuth(); // Obtiene el usuario autenticado del contexto
  const [modalVisible, setModalVisible] = useState(false); // Estado para mostrar/ocultar el modal

  // Determina si la tab está seleccionada según la ruta actual y el nombre de la tab
  const isSelected =
    pathname === `/${routeName}` ||
    pathname.endsWith(`/${routeName}`) ||
    pathname === routeName ||
    (pathname === '/' && routeName === 'home');

  // Lógica al presionar el botón de la tab:
  // - Si hay usuario logueado o es la tab 'home', permite la navegación
  // - Si no, muestra el modal pidiendo iniciar sesión
  const handlePress = (event: any) => {
    if (user || routeName === 'home') {
      onPress?.(event); // Ejecuta la función onPress si está definida
    } else {
      setModalVisible(true); // Muestra el modal si no está logueado y no es home
    }
  };

  // Lógica para ir a la pantalla de login desde el modal
  const handleGoToLogin = () => {
    setModalVisible(false);
    router.push('/(auth)/login');
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
            opacity: user || routeName === 'home' ? 1 : 1, // feedback visual (puedes cambiar opacidad si quieres)
          },
          style,
        ]}
        activeOpacity={0.3}
        {...otherProps}
      >
        {children}
        {/* Sombreado solo si está logueado y la tab está seleccionada */}
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
      {/* Modal que aparece si intenta navegar sin estar logueado */}
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
              router.push('/(auth)/login');
            }}
          />
        </View>
      </Modal>
    </>
  );
};

export default CustomTabButton;
