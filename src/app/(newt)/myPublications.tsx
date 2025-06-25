import EmptyPublications from '@/src/components/molecules/emptypublications'
import React from 'react'
import { View } from 'react-native'

const myPublications = () => {
  return (
    <View>
      <EmptyPublications />
      {/* <CardPublications /> */}
    </View>
  )
}

export default myPublications
