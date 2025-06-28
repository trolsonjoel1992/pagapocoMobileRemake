import CardPublications from '@/src/components/molecules/cardPublications'
import { View } from 'react-native'

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
      {/* <ScrollView></ScrollView> */}

      {/* // van las validaciones de la api */}

      <CardPublications />
      {/*   <EmptyPublications /> */}
    </View>
  )
}

export default myPublications
