import IconsPath from '@/src/constants/iconsPath';
import {
  globalBorderRadius,
  globalBorderWidth,
  globalFontSizeMid,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
type Props = {
  title: string;
  enableToggle?: boolean;
  onPress?: () => void;
  settingKey: string;
};

const ButtonSetting = ({ title, enableToggle, onPress, settingKey }: Props) => {
  const [isEnabled, setIsEnabled] = useState(enableToggle);

  React.useEffect(() => {
    AsyncStorage.getItem(settingKey).then(value => {
      if (value !== null) setIsEnabled(JSON.parse(value));
    });
  }, []);

  const handleToggle = () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    AsyncStorage.setItem(settingKey, JSON.stringify(newValue));
    if (onPress) onPress();
  };

  const { colors, theme } = useTheme();
  return (
    <View
      style={{
        backgroundColor: colors.backgroundBCI,
        borderRadius: globalBorderRadius,
        height: moderateScale(55),
        width: '90%',
        padding: moderateScale(10),
        borderColor: colors.textPrimary,
        borderWidth: globalBorderWidth,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Text
        style={{
          color: colors.textPrimary,
          fontSize: globalFontSizeMid,
        }}
      >
        {title}
      </Text>
      <TouchableOpacity onPress={handleToggle}>
        <Image
          source={
            isEnabled
              ? theme === 'dark'
                ? IconsPath.darkToggleEn
                : IconsPath.toggleEnabl
              : theme === 'dark'
                ? IconsPath.darkToggleDi
                : IconsPath.toggleDisab
          }
          style={{ width: moderateScale(40), height: moderateScale(40) }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonSetting;
