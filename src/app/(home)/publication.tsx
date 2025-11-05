import DescriptionCard from '@/src/components/atom/cards/home/descriptionCard';
import CardVisual from '@/src/components/atom/cards/myPublications/cardVisual';
import HomeHeader from '@/src/components/molecule/home/homeHeader';
import PublicationButtons from '@/src/components/molecule/home/publicationButtons';
import {
  globalFontSizeMid,
  globalFontSizeTitle,
  globalFontWeightBold,
} from '@/src/constants/styles/globalStyles';
import { useAuth } from '@/src/context/AuthContext';
import { usePublication } from '@/src/context/PublicationContext';
import { useTheme } from '@/src/context/ThemeContext';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

const Publication = () => {
  const { colors } = useTheme();
  const { id } = useLocalSearchParams();
  const publicationId = Array.isArray(id) ? id[0] : id;
  const { publications } = usePublication();
  const { user } = useAuth();

  const publication = publications.find(pub => pub.id === publicationId);

  if (!publication) {
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: colors.background }]}
      >
        <HomeHeader backAction={true} />
        <Text>Publicación no encontrada</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HomeHeader backAction={true} />
      <Text style={[styles.title, { color: colors.textPrimary }]}>
        {publication.title}
      </Text>
      {publication.isPremium && (
        <Text
          style={{
            fontSize: globalFontSizeMid,
            color: colors.textBlue,
            marginBottom: 4,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Recomendada
        </Text>
      )}
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <CardVisual
            publicationId={publication.id}
            publication={publication}
          />
          <DescriptionCard publication={publication} />
        </View>
      </ScrollView>
      <PublicationButtons
        isPremium={publication.isPremium}
        hideContactButtons={!!user && publication.userEmail === user.email}
      />
    </SafeAreaView>
  );
};

export default Publication;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  content: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: moderateScale(15),
  },
  title: {
    fontSize: globalFontSizeTitle,
    fontWeight: globalFontWeightBold,
    marginVertical: moderateScale(5),
    textAlign: 'center',
  },
});
