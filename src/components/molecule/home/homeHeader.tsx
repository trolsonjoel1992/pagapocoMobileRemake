import LoginButton from '@/src/components/atom/buttons/home/loginButton';
import NotificationButton from '@/src/components/atom/buttons/home/notifictationButton';
import SearchBar from '@/src/components/atom/imputs/home/searchBar';
import Category from '@/src/components/molecule/home/category';
import HomeButton from '@/src/components/molecule/home/homeButton';
import { router, usePathname } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

type HomeHeaderProps = {
  backAction?: boolean;
  hiddenIndex?: number | null;
  setHiddenIndex?: (idx: number | null) => void;
};

const HomeHeader = ({
  backAction,
  hiddenIndex,
  setHiddenIndex,
}: HomeHeaderProps) => {
  const pathname = usePathname();
  const showCategoryButtons = pathname.includes('home');

  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 5,
      }}
    >
      <View
        style={{
          width: '92.5%',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <SearchBar showBack={backAction} />
        <NotificationButton onPress={() => router.push('/(home)/details')} />
      </View>
      <LoginButton />
      <HomeButton />
      {showCategoryButtons && (
        <Category hiddenIndex={hiddenIndex} setHiddenIndex={setHiddenIndex} />
      )}
    </View>
  );
};

export default HomeHeader;
