import EmptyPublication from '@/src/components/atom/cards/myPublications/emptyPublication';
import CardMyPlctns from '@/src/components/molecule/myPublications/viewMypbs/cardMyPlctns';
import { useAuth } from '@/src/context/AuthContext';
import { usePublication } from '@/src/context/PublicationContext';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

export default function MyPublicationsScreen() {
  const { colors } = useTheme();
  const { publications } = usePublication();
  const { user } = useAuth();

  const userPublications = publications.filter(
    pub => pub.userEmail === user?.email
  );

  const renderPublication = ({ item }: { item: any }) => (
    <CardMyPlctns publication={item} />
  );

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {userPublications.length === 0 ? (
        <View>
          <EmptyPublication />
        </View>
      ) : (
        <View style={styles.content}>
          <FlatList
            data={userPublications}
            renderItem={renderPublication}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            ItemSeparatorComponent={renderSeparator}
            style={styles.flatList}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingTop: moderateScale(16),
  },
  flatList: {},
  listContainer: {
    paddingBottom: moderateScale(20),
    alignItems: 'center',
  },
  separator: {
    height: moderateScale(20),
  },
});
