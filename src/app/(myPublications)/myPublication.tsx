import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import FramePublication from '@/src/components/molecule/myPublications/framePublication';
import { usePublication } from '@/src/context/PublicationContext';
import { useTheme } from '@/src/context/ThemeContext';
import { useMyPublication } from '@/src/hooks/mypublication/useMyPublication';
import { useFocusEffect } from '@react-navigation/native';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MyPublication = () => {
  const { id } = useLocalSearchParams();
  const publicationId = Array.isArray(id) ? id[0] : id;
  const { publications } = usePublication();
  const { colors } = useTheme();

  // Usar estado local para forzar re-render cuando cambia la publicación
  const [currentPublication, setCurrentPublication] = useState(
    publications.find(pub => pub.id === publicationId)
  );

  // Actualizar la publicación cada vez que se enfoca la pantalla o cambia publications
  useFocusEffect(
    useCallback(() => {
      const pub = publications.find(pub => pub.id === publicationId);
      setCurrentPublication(pub);
    }, [publications, publicationId])
  );

  if (!currentPublication) return null;

  const {
    handleSell,
    handlePause,
    handleEdit,
    handleDelete,
    isSold,
    isPaused,
    isDeleting,
  } = useMyPublication(currentPublication);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HeaderGeneric
        title='Mi publicación'
        onBackPress={() => {
          router.back();
        }}
      />
      <FramePublication publication={currentPublication} />
      <ButtonReg action='Volver' onPress={() => router.back()} />
    </SafeAreaView>
  );
};

export default MyPublication;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
