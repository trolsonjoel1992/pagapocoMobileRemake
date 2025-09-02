import IconsPath from '@/src/constants/iconsPath';
import { globalBorderRadius } from '@/src/constants/styles/globalStyles';
import { useTheme } from '@/src/context/ThemeContext';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type ContainerPictureProps = {
  imageUri: string;
  onDelete?: () => void;
  isNewImage?: boolean; // Add this prop
};

const ContainerPicture: React.FC<ContainerPictureProps> = ({
  imageUri,
  onDelete,
  isNewImage = false, // Default to false
}) => {
  const { theme, colors } = useTheme();
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(isNewImage);
  const [showImage, setShowImage] = useState(!isNewImage);
  const loadingAnimation = useRef(new Animated.Value(0)).current;
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isNewImage || hasAnimated.current) return;

    const uniqueAnimation = async () => {
      loadingAnimation.setValue(0);
      const progressListener = loadingAnimation.addListener(({ value }) => {
        setProgress(Math.floor(value * 100));
      });

      return new Promise<void>(resolve => {
        Animated.timing(loadingAnimation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }).start(() => {
          loadingAnimation.removeListener(progressListener);
          resolve();
        });
      });
    };

    uniqueAnimation().then(() => {
      setShowImage(true);
      setIsLoading(false);
      hasAnimated.current = true;
    });

    return () => loadingAnimation.removeAllListeners();
  }, [isNewImage]);

  return (
    <View
      style={{
        width: moderateScale(125),
        height: moderateScale(125),
        borderRadius: globalBorderRadius,
        position: 'relative',
      }}
    >
      {showImage && (
        <Image
          source={{ uri: imageUri }}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: globalBorderRadius,
          }}
        />
      )}

      {isLoading && (
        <View
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            position: 'absolute',
            borderRadius: globalBorderRadius,
            backgroundColor: colors.backgroundBCI,
          }}
        >
          <Animated.View
            style={{
              width: loadingAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
              height: moderateScale(4),
              backgroundColor: colors.primary,
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              color: colors.textPrimary,
              fontSize: moderateScale(14),
              marginTop: moderateScale(10),
            }}
          >
            {`${progress}%`}
          </Text>
        </View>
      )}

      {!isLoading && (
        <TouchableOpacity
          onPress={onDelete}
          style={{
            position: 'absolute',
            top: -moderateScale(8),
            right: -moderateScale(8),
          }}
        >
          <Image
            source={theme === 'dark' ? IconsPath.cancelD : IconsPath.cancel}
            style={{
              width: moderateScale(32),
              height: moderateScale(32),
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ContainerPicture;
