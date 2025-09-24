import { useImages } from '@/src/context/ImageContext';
import { useTheme } from '@/src/context/ThemeContext';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

interface CardVisualProps {
  publicationId: string;
}
const CardVisual: React.FC<CardVisualProps> = ({ publicationId }) => {
  const { images, getImages } = useImages();
  const { colors } = useTheme();
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
  const renderImage = ({ item }: { item: string }) => (
    <View
      style={{
        width: screenWidth,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        source={{ uri: item }}
        style={{
          width: imageWidth,
          height: moderateScale(200),
          borderRadius: moderateScale(20),
        }}
        resizeMode='cover'
      />
    </View>
  );
  if (images.length === 0) {
    return null;
  }

  return (
    <View style={{ alignItems: 'center', height: moderateScale(280) }}>
      <FlatList
        data={images}
        renderItem={renderImage}
        keyExtractor={(item, index) => `image_${index}_${item}`}
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
      {images.length > 1 && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: moderateScale(15),
            borderRadius: moderateScale(15),
            paddingVertical: moderateScale(8),
            paddingHorizontal: moderateScale(12),
          }}
        >
          {images.map((_, index) => (
            <View
              key={index}
              style={{
                width: moderateScale(10),
                height: moderateScale(10),
                borderRadius: moderateScale(5),
                backgroundColor:
                  index === currentIndex
                    ? colors.primary
                    : colors.backgroundBCI,
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
