import Imagebutton from '@/src/components/atom/buttons/myPublications/imagebutton';
import ModDelete from '@/src/components/molecule/modal/myPublication/modDelete';
import ModalCard from '@/src/components/molecule/myPublications/modalCardS';
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
    firstImage,
    isSold,
    handlePause,
    handlePlay,
    handleSell,
    handleNewSell,
    handleDelete,
    handleEdit,
    handleUpgrade,
    handleView,
  } = useMyPublication(publication);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [warningVisible, setWarningVisible] = React.useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const pausePressAct = () => {
    showModal();
    handlePause();
  };
  const playPressAct = () => {
    hideModal();
    handlePlay();
  };
  const deletePress = () => {
    setWarningVisible(true);
  };
  const deleteConfirm = () => {
    setWarningVisible(false);
    handleDelete();
  };
  const deleteCancel = () => {
    setWarningVisible(false);
  };
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
          <Imagebutton image={firstImage} onPress={handleView} />
          <CardActions
            isSold={isSold}
            sellPress={handleSell}
            newSellPress={handleNewSell}
            pausePress={pausePressAct}
            deletePress={deletePress}
            editPress={handleEdit}
            upgradePress={handleUpgrade}
          />
        </View>
      </View>
      {modalVisible && (
        <ModalCard playPress={playPressAct} trashPress={deletePress} />
      )}
      {warningVisible && (
        <ModDelete
          visible={warningVisible}
          pressCancel={deleteCancel}
          pressAction={deleteConfirm}
        />
      )}
    </View>
  );
};
export default CardMyPlctns;
