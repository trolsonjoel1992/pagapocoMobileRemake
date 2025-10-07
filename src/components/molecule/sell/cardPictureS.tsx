import ButtonIcon from '@/src/components/atom/buttons/buttonIcon';
import ButtonIconDis from '@/src/components/atom/buttons/buttonIconDis';
import ContainerPicture from '@/src/components/atom/cards/sell/containerPicture';
import {
  globalBorderRadius,
  globalFontSizeMid,
  globalFontSizeTitle,
  globalFontWeightBold,
} from '@/src/constants/styles/globalStyles';
import { useCardPictureS } from '@/src/hooks/sell/useCardPicture';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type CardPictureSProps = {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
};

const CardPictureS = ({ images, setImages }: CardPictureSProps) => {
  const {
    colors,
    theme,
    attempts,
    buttonPressed,
    newImageUri,
    handleDeleteImage,
    handleSelectImage,
    getTitleText,
    getSubtitleText,
    handleDisabledPress,
  } = useCardPictureS(images, setImages);
  const renderImage = ({
    item: uri,
    index,
  }: {
    item: string;
    index: number;
  }) => (
    <ContainerPicture
      key={`${uri}_${index}`}
      imageUri={uri}
      onDelete={() => handleDeleteImage(uri)}
      isNewImage={uri === newImageUri}
    />
  );
  return (
    <View
      style={{
        backgroundColor: colors.background,
        alignItems: 'center',
        height: '50%',
        width: '90%',
      }}
    >
      <View
        style={{
          backgroundColor: colors.backgroundBCI,
          borderColor: colors.textPrimary,
          borderRadius: globalBorderRadius,
          borderWidth: moderateScale(2),
          padding: moderateScale(20),
          borderStyle: 'dashed',
          height: 'auto',
          width: '100%',
        }}
      >
        <Text
          style={{
            fontWeight: globalFontWeightBold,
            marginBottom: moderateScale(8),
            fontSize: globalFontSizeTitle,
            color: colors.textPrimary,
            textAlign: 'center',
          }}
        >
          {getTitleText()}
        </Text>
        <Text
          style={{
            fontSize: globalFontSizeMid,
            color:
              buttonPressed && attempts <= 0
                ? colors.error
                : colors.textPrimary,
            textAlign: 'center',
          }}
        >
          {getSubtitleText()}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: moderateScale(75),
            marginTop: moderateScale(15),
          }}
        >
          {attempts <= 0 ? (
            <>
              <ButtonIconDis
                iconSource={'opnCameraDis'}
                onPress={handleDisabledPress}
              />
              <ButtonIconDis
                iconSource={'uploadDis'}
                onPress={handleDisabledPress}
              />
            </>
          ) : (
            <>
              <ButtonIcon
                iconSource={theme === 'dark' ? 'opnCameraD' : 'opnCamera'}
                onPress={() => handleSelectImage('camera')}
              />
              <ButtonIcon
                iconSource={theme === 'dark' ? 'uploadD' : 'upload'}
                onPress={() => handleSelectImage('gallery')}
              />
            </>
          )}
        </View>
        {images.length > 0 && (
          <FlatList
            data={images}
            renderItem={renderImage}
            keyExtractor={(uri, index) => `${uri}_${index}`}
            numColumns={2}
            style={{
              height: moderateScale(200),
              marginTop: moderateScale(10),
            }}
            columnWrapperStyle={{
              gap: moderateScale(10),
              justifyContent: 'space-evenly',
            }}
            contentContainerStyle={{
              gap: moderateScale(10),
              paddingVertical: moderateScale(15),
            }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

export default CardPictureS;
