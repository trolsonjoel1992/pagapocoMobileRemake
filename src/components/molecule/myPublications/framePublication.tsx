import CardVisual from '@/src/components/atom/cards/myPublications/cardVisual';
import ModDelete from '@/src/components/molecule/modal/myPublication/modDelete';
import ModalCardL from '@/src/components/molecule/myPublications/modalCardL';
import UpdateButtonSet from '@/src/components/molecule/myPublications/updateButtonSet';
import {
  globalBorderRadius,
  globalButtonElevation,
  globalFontSizeMid,
  globalFontSizeSmall,
  globalFontSizeTitle,
  globalFontWeightBold,
} from '@/src/constants/styles/globalStyles';
import { Publication } from '@/src/context/PublicationContext';
import { useTheme } from '@/src/context/ThemeContext';
import { useMyPublication } from '@/src/hooks/mypublication/useMyPublication';
import { router } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

interface Props {
  publication: Publication;
}
const safeText = (
  value: string | number | undefined | null,
  placeholder = 'Sin información'
) =>
  value !== null && value !== undefined && String(value).trim()
    ? String(value)
    : placeholder;
const FramePublication: React.FC<Props> = ({ publication }) => {
  const { colors } = useTheme();
  const {
    isSold,
    isPaused,
    handlePause,
    handlePlay,
    handleSell,
    handleNewSell,
    handleDelete,
    handleEdit,
    handleUpgrade,
  } = useMyPublication(publication);
  const [warningVisible, setWarningVisible] = React.useState(false);
  const pausePressA = () => {
    handlePause();
  };
  const playPressA = () => {
    handlePlay();
  };
  const deletePressA = () => {
    setWarningVisible(true);
  };
  const deleteConfirm = () => {
    setWarningVisible(false);
    handleDelete();
    router.back();
  };
  const deleteCancel = () => {
    setWarningVisible(false);
  };
  return (
    <View
      style={{
        backgroundColor: colors.backgroundBCI,
        elevation: globalButtonElevation,
        borderRadius: globalBorderRadius,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2.5%',
        height: '72.5%',
        width: '95%',
      }}
    >
      <View>
        <Text
          style={{
            fontSize: globalFontSizeTitle,
            fontWeight: globalFontWeightBold,
          }}
        >
          {safeText(publication.title, 'Sin título')}
        </Text>
        <View
          style={{
            alignItems: 'flex-start',
            flexDirection: 'row',
          }}
        >
          <Text style={{ fontSize: globalFontSizeMid }}>
            {safeText(publication.year, 'Año no disponible')}
          </Text>
          <Text style={{ fontSize: globalFontSizeMid }}> | </Text>
          <Text style={{ fontSize: globalFontSizeMid }}>
            {safeText(publication.kilometers, 'Km no disponible') +
              (publication.kilometers ? ' km' : '')}
          </Text>
        </View>
        <CardVisual publicationId={publication.id} publication={publication} />
        <Text style={{ fontSize: globalFontSizeTitle }}>Precio:</Text>
        <Text
          style={{
            fontSize: globalFontSizeMid,
            fontWeight: globalFontWeightBold,
          }}
        >
          Descripción:
        </Text>
        <Text
          style={{
            fontSize: globalFontSizeSmall,
            marginBottom: '1.5%',
          }}
        >
          {safeText(publication.description, 'Sin descripción')}
        </Text>
        <View>
          <UpdateButtonSet
            isSold={isSold}
            isPremium={publication.isPremium}
            sellPress={handleSell}
            newSellPress={handleNewSell}
            pausePress={pausePressA}
            deletePress={deletePressA}
            editPress={handleEdit}
            upgradePress={handleUpgrade}
          />
        </View>
      </View>
      {isPaused && (
        <ModalCardL playPress={playPressA} trashPress={deletePressA} />
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

export default FramePublication;
