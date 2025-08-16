import SkeletonItem from '@/src/components/atom/skeletons/skeletonItem';
import {
  globalBorderRadius,
  globalIconsMid,
  globalInputHeight,
} from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React from 'react';
import { View } from 'react-native';

const SkeletonHome = () => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
      }}
    >
      <View
        style={{
          width: '90%',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        <SkeletonItem
          width='75%'
          height={globalInputHeight}
          borderRadius={globalBorderRadius}
        />
        <SkeletonItem
          width={globalInputHeight}
          height={globalInputHeight}
          borderRadius={globalBorderRadius}
        />
      </View>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <SkeletonItem
          width='70%'
          height={globalIconsMid}
          borderRadius={globalBorderRadius}
        />
      </View>
      <View
        style={{
          width: '85%',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        <SkeletonItem
          width='50%'
          height={globalIconsMid}
          borderRadius={globalBorderRadius}
        />
        <SkeletonItem
          width='40%'
          height={globalIconsMid}
          borderRadius={globalBorderRadius}
        />
      </View>
      <View
        style={{
          width: '85%',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        {Array.from({ length: 5 }).map((_, idx) => (
          <SkeletonItem
            key={idx}
            width={globalIconsMid}
            height={globalIconsMid}
            borderRadius={globalBorderRadius}
          />
        ))}
      </View>
    </View>
  );
};

export default SkeletonHome;
