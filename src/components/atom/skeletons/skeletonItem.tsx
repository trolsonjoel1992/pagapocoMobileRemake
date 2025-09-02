import { useTheme } from '@/src/context/ThemeContext';
import React, { useEffect, useMemo } from 'react';
import { Animated, Dimensions, Easing, StyleSheet, View } from 'react-native';

type SkeletonItemProps = {
  width: number | `${number}%`;
  height: number | `${number}%`;
  borderRadius?: number;
  marginTop?: number;
  marginBottom?: number;
};

const { width: windowWidth } = Dimensions.get('window');

const SkeletonItem = ({
  width,
  height,
  borderRadius = 0,
  marginTop = 0,
  marginBottom = 0,
}: SkeletonItemProps) => {
  const { colors } = useTheme();
  const shimmerAnimation = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(shimmerAnimation, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    );
    animation.start();
    return () => {
      animation.stop();
    };
  }, [shimmerAnimation]);

  const translateX = shimmerAnimation.interpolate({
    inputRange: [0, 0.75],
    outputRange: [-windowWidth, windowWidth],
  });

  return (
    <View
      style={{
        width,
        height,
        borderRadius,
        marginTop,
        marginBottom,
        backgroundColor: colors.backgroundSk,
        overflow: 'hidden',
      }}
    >
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {
            backgroundColor: colors.secondary,
            transform: [{ translateX }],
            opacity: 0.25,
          },
        ]}
      />
    </View>
  );
};

export default SkeletonItem;
