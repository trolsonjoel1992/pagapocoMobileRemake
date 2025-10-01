import ButtonReg from '@/src/components/atom/buttons/buttonReg';
import HeaderGeneric from '@/src/components/atom/header/headerGeneric';
import FramePublication from '@/src/components/molecule/myPublications/framePublication';
import { usePublication } from '@/src/context/PublicationContext';
import { useTheme } from '@/src/context/ThemeContext';
import { useMyPublication } from '@/src/hooks/mypublication/useMyPublication';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MyPublication = () => {
  const { id } = useLocalSearchParams();
  const publicationId = Array.isArray(id) ? id[0] : id;
  const { publications } = usePublication();
  const { colors } = useTheme();
  const publication = publications.find(pub => pub.id === publicationId);
  if (!publication) return null;

  const {
    handleSell,
    handlePause,
    handleEdit,
    handleDelete,
    isSold,
    isPaused,
    isDeleting,
  } = useMyPublication(publication);

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
      <FramePublication publication={publication} />
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
