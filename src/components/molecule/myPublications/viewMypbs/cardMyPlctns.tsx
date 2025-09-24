import Imagebutton from '@/src/components/atom/buttons/myPublications/imagebutton';
import ModalCard from '@/src/components/molecule/myPublications/modalCard';
import CardActions from '@/src/components/molecule/myPublications/viewMypbs/cardActions';
import {
  globalBorderRadius,
  globalButtonElevation,
  globalCardMyPlctnsHeight,
  globalFontSizeReg,
} from '@/src/constants/styles/globalStyles';
import { Publication } from '@/src/context/PublicationContext';
import { useTheme } from '@/src/context/ThemeContext';
import { useMyPublication } from '@/src/hooks/mypublication/useMyPublication';
import React from 'react';
import { Text, View } from 'react-native';

interface CardMyPlctnsProps {
  publication: Publication;
}
const CardMyPlctns: React.FC<CardMyPlctnsProps> = ({ publication }) => {
  const { colors } = useTheme();
  const {
    modalVisible,
    firstImage,
    isSold,
    handlePause: handlePausePress,
    handlePlay: handlePlayPress,
    handleSell: handleSellPress,
    handleNewSell: handleNewSellPress,
    handleDelete,
    handleEdit,
    handleUpgrade,
  } = useMyPublication(publication);
  return (
    <View
      style={{
        width: '95%',
        padding: '1%',
        alignItems: 'center',
        justifyContent: 'center',
        height: globalCardMyPlctnsHeight,
        elevation: globalButtonElevation,
        borderRadius: globalBorderRadius,
        backgroundColor: colors.backgroundBCI,
      }}
    >
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: colors.textPrimary,
            fontSize: globalFontSizeReg,
            marginBottom: '2.75%',
          }}
        >
          {isSold ? 'Publicación Vendida' : publication.title}
        </Text>
        <View
          style={{
            gap: '1%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Imagebutton image={firstImage} />
          <CardActions
            isSold={isSold}
            onSellPress={handleSellPress}
            onNewSellPress={handleNewSellPress}
            onPausePress={handlePausePress}
            deletePress={handleDelete}
            onEditPress={handleEdit}
            onUpgradePress={handleUpgrade}
          />
        </View>
      </View>
      {modalVisible && (
        <ModalCard playPress={handlePlayPress} trashPress={handlePausePress} />
      )}
    </View>
  );
};

export default CardMyPlctns;
