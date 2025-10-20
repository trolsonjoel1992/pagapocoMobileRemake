import EditButton from '@/src/components/atom/buttons/myPublications/editButton';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
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
      <EditButton
        action='Categoría'
        onPress={() => router.push('/(myPublications)/editCategory')}
      />
      <EditButton action='Descripción' />
      <EditButton
        action='Imágenes'
        onPress={() => router.push('/(myPublications)/editImages')}
      />
      <EditButton action='Título/Precio' />
    </View>
  );
};

export default EditButtonSet;
