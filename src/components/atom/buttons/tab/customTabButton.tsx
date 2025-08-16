import { usePathname } from 'expo-router';
import React from 'react';
import { GestureResponderEvent, TouchableOpacity, View } from 'react-native';

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

  const isSelected =
    pathname === `/${routeName}` ||
    pathname.endsWith(`/${routeName}`) ||
    pathname === routeName ||
    (pathname === '/' && routeName === 'home');
  return (
    <TouchableOpacity
      onPress={onPress}
      testID={testID}
      style={[
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}
      activeOpacity={0.3}
      {...otherProps}
    >
      {children}
      {isSelected && (
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
  );
};

export default CustomTabButton;
