import CardPublications from '@/src/components/molecules/cardPublications'
import EmptyPublications from '@/src/components/molecules/emptypublications'
import React from 'react'
import { ScrollView, View } from 'react-native'

//llamo api
const myPublications = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      <ScrollView
      // van las validaciones de la api
      >
        <EmptyPublications />
        <CardPublications />
      </ScrollView>
    </View>
  )
}

export default myPublications
