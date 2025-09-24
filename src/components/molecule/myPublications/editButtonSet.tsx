import EditButton from '@/src/components/atom/buttons/myPublications/editButton';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { View } from 'react-native';

const EditButtonSet = () => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        gap: '1%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.background,
      }}
    >
      <EditButton action='Categoría' />
      <EditButton action='Descripción' />
      <EditButton action='Imágenes' />
      <EditButton action='Título/Precio' />
    </View>
  );
};

export default EditButtonSet;
