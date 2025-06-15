import { router } from 'expo-router'
import React, { useEffect, useMemo } from 'react'
import {
  Animated,
  Dimensions,
  DimensionValue,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters'

const { width } = Dimensions.get('window')
const SkeletonScreen = () => {
  const shimmerAnimation = useMemo(() => new Animated.Value(0), [])
  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnimation, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    )
    const redirectTimer = setTimeout(() => {
      router.replace('/(tabs)/home')
    }, 1500)
    animation.start()
    return () => {
      animation.stop()
      clearTimeout(redirectTimer)
    }
  }, [shimmerAnimation])
  const translateX = shimmerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width],
  })
  interface SkeletonItemProps {
    width: DimensionValue
    height: DimensionValue
    borderRadius?: number
    marginTop?: number
    marginBottom?: number
  }
  const SkeletonItem: React.FC<SkeletonItemProps> = ({
    width,
    height,
    borderRadius = 0,
    marginTop = 0,
    marginBottom = 0,
  }) => {
    const itemStyle: ViewStyle = {
      width,
      height,
      borderRadius,
      marginTop,
      marginBottom,
      backgroundColor: '#F3E9F7',
      overflow: 'hidden',
    }
    return (
      <View style={itemStyle}>
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            {
              backgroundColor: '#FAF5FD',
              transform: [{ translateX }],
              opacity: 0.5,
            },
          ]}
        />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.row}>
        <SkeletonItem
          width={moderateScale(250)}
          height={moderateScale(45)}
          borderRadius={moderateScale(20)}
          marginTop={moderateScale(15)}
        />
        <SkeletonItem
          width={moderateScale(45)}
          height={moderateScale(45)}
          borderRadius={moderateScale(23)}
          marginTop={moderateScale(15)}
        />
      </View>

      <SkeletonItem
        width={moderateScale(180)}
        height={moderateScale(38)}
        borderRadius={moderateScale(20)}
        marginTop={moderateScale(7)}
      />

      <View style={styles.row}>
        <SkeletonItem
          width={moderateScale(150)}
          height={moderateScale(38)}
          borderRadius={moderateScale(20)}
          marginTop={moderateScale(7)}
        />
        <SkeletonItem
          width={moderateScale(130)}
          height={moderateScale(38)}
          borderRadius={moderateScale(20)}
          marginTop={moderateScale(7)}
        />
      </View>

      <View style={styles.listItem}>
        {[...Array(5)].map((_, index) => (
          <SkeletonItem
            key={`circle-${index}`}
            width={moderateScale(45)}
            height={moderateScale(45)}
            borderRadius={moderateScale(23)}
            marginTop={moderateScale(20)}
          />
        ))}
      </View>

      <View style={styles.listItem}>
        {[...Array(6)].map((_, index) => (
          <View key={`card-${index}`} style={styles.cardContainer}>
            <SkeletonItem
              width={moderateScale(150)}
              height={moderateScale(111)}
              borderRadius={moderateScale(20)}
              marginTop={moderateScale(7)}
            />
            <SkeletonItem
              width={moderateScale(150)}
              height={moderateScale(20)}
              borderRadius={moderateScale(20)}
              marginTop={moderateScale(4)}
            />
            <SkeletonItem
              width={moderateScale(109)}
              height={moderateScale(20)}
              borderRadius={moderateScale(20)}
              marginTop={moderateScale(3)}
              marginBottom={moderateScale(3)}
            />
          </View>
        ))}
      </View>

      <SkeletonItem
        width="100%"
        height={moderateScale(55)}
        marginTop={moderateScale(15)}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: moderateScale(25),
    width: moderateScale(350),
  },
  listItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: moderateScale(20),
  },
  cardContainer: {
    alignItems: 'flex-start',
  },
})

export default SkeletonScreen
