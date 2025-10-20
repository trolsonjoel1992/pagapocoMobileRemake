import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import CategoryButton from '@/src/components/atom/buttons/myPublications/categoryButton';
import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import { usePublication } from '@/src/context/PublicationContext';
import { useTheme } from '@/src/context/ThemeContext';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type CategoryType = 'truck' | 'pickup' | 'car' | 'motorcycle' | 'pieces';

const EditCategory = () => {
  const { colors, theme } = useTheme();
  const { publication, updatePublicationById } = usePublication();
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null
  );
  const [hasChanges, setHasChanges] = useState(false);
  useEffect(() => {
    if (publication?.category) {
      setSelectedCategory(publication.category as CategoryType);
    }
  }, [publication]);
  useEffect(() => {
    if (publication?.category && selectedCategory) {
      setHasChanges(publication.category !== selectedCategory);
    }
  }, [selectedCategory, publication]);

  const handleCategorySelect = (category: CategoryType) => {
    setSelectedCategory(category);
  };
  const handleSave = async () => {
    if (!publication?.id || !selectedCategory) {
      Alert.alert('Error', 'No se puede guardar la categoría');
      return;
    }
    if (!hasChanges) {
      router.back();
      return;
    }
    try {
      await updatePublicationById(publication.id, {
        category: selectedCategory,
      });
      Alert.alert('Éxito', 'Categoría actualizada correctamente', [
        {
          text: 'OK',
          onPress: () => router.back(),
        },
      ]);
    } catch (error) {
      console.error('Error updating category:', error);
      Alert.alert('Error', 'No se pudo actualizar la categoría');
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HeaderGeneric title='Editar categoría' onBackPress={router.back} />
      <Text style={[styles.title, { color: colors.textPrimary }]}>
        Selecciona la categoria correcta
      </Text>
      <CategoryButton
        action='Camiones'
        image={theme === 'dark' ? 'trailerED' : 'trailerE'}
        isSelected={selectedCategory === 'truck'}
        onPress={() => handleCategorySelect('truck')}
      />
      <CategoryButton
        action='Camionetas'
        image={theme === 'dark' ? 'truckED' : 'truckE'}
        isSelected={selectedCategory === 'pickup'}
        onPress={() => handleCategorySelect('pickup')}
      />
      <CategoryButton
        action='Autos'
        image={theme === 'dark' ? 'carED' : 'carE'}
        isSelected={selectedCategory === 'car'}
        onPress={() => handleCategorySelect('car')}
      />
      <CategoryButton
        action='Motos'
        image={theme === 'dark' ? 'bikeED' : 'bikeE'}
        isSelected={selectedCategory === 'motorcycle'}
        onPress={() => handleCategorySelect('motorcycle')}
      />
      <CategoryButton
        action='Piezas'
        image={theme === 'dark' ? 'pieceED' : 'pieceE'}
        isSelected={selectedCategory === 'pieces'}
        onPress={() => handleCategorySelect('pieces')}
      />
      <ButtonReg
        action={hasChanges ? 'Guardar' : 'Volver'}
        onPress={handleSave}
      />
    </SafeAreaView>
  );
};

export default EditCategory;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
