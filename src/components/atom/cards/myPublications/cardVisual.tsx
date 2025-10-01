import ImagesPath from '@/src/constants/imagesPath';
import { useImages } from '@/src/context/ImageContext';
import { useTheme } from '@/src/context/ThemeContext';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

interface CardVisualProps {
  publicationId: string;
  publication?: {
    isPremium?: boolean;
  };
}
const CardVisual: React.FC<CardVisualProps> = ({
  publicationId,
  publication,
}) => {
  const { images, getImages } = useImages();
  const { colors, theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (publicationId) {
      getImages(publicationId);
    }
  }, [publicationId]);
  const screenWidth = Dimensions.get('window').width;
  const imageWidth = moderateScale(270);
  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setCurrentIndex(index);
  };
  const maxImages = publication?.isPremium ? 8 : 4;
  let displayImages: (string | number)[] =
    images && images.length > 0
      ? [...images]
      : [theme === 'dark' ? ImagesPath.noImageD : ImagesPath.noImage];
  while (displayImages.length < maxImages) {
    displayImages.push(
      theme === 'dark' ? ImagesPath.noImageD : ImagesPath.noImage
    );
  }
  const renderImage = ({ item }: { item: string | number }) => (
    <View
      style={{
        width: screenWidth,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {typeof item === 'string' ? (
        <Image
          source={{ uri: item }}
          style={{
            width: imageWidth,
            height: moderateScale(200),
            borderRadius: moderateScale(20),
          }}
          resizeMode='cover'
        />
      ) : (
        <Image
          source={item}
          style={{
            width: imageWidth,
            height: moderateScale(200),
            borderRadius: moderateScale(20),
          }}
          resizeMode='cover'
        />
      )}
    </View>
  );
  return (
    <View style={{ alignItems: 'center', height: moderateScale(265) }}>
      <FlatList
        data={displayImages}
        renderItem={renderImage}
        keyExtractor={(_, index) => `image_${index}`}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        snapToInterval={screenWidth}
        snapToAlignment='center'
        decelerationRate='fast'
        pagingEnabled={true}
        bounces={false}
      />
      {displayImages.length > 1 && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: moderateScale(5),
            borderRadius: moderateScale(15),
            paddingVertical: moderateScale(5),
            paddingHorizontal: moderateScale(12),
          }}
        >
          {displayImages.map((_, index) => (
            <View
              key={index}
              style={{
                width: moderateScale(10),
                height: moderateScale(10),
                borderRadius: moderateScale(5),
                backgroundColor:
                  index === currentIndex ? colors.primary : colors.secondary,
                marginHorizontal: moderateScale(4),
                opacity: index === currentIndex ? 1 : 0.6,
              }}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default CardVisual;
