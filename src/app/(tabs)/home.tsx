import CardHome from '@/src/components/atom/cards/home/cardHome';
import HomeHeader from '@/src/components/molecule/home/homeHeader';
import { Publication, usePublication } from '@/src/context/PublicationContext';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

const Home = () => {
  const { colors } = useTheme();
  const { publications } = usePublication();
  const availablePublications = publications.filter(
    pub => !pub.isSold && !pub.isPaused
  );

  const renderPublication = ({ item }: { item: Publication }) => (
    <CardHome publication={item} />
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <HomeHeader backAction={false} />
      <View style={styles.content}>
        <FlatList
          data={availablePublications}
          renderItem={renderPublication}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={styles.columnWrapper}
          style={styles.flatList}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    width: '100%',
  },
  flatList: {
    flex: 1,
    width: '100%',
  },
  listContainer: {
    paddingBottom: moderateScale(20),
    paddingTop: moderateScale(10),
    paddingHorizontal: moderateScale(10),
  },
  columnWrapper: {
    justifyContent: 'flex-start',
    gap: moderateScale(10),
  },
});
