import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import { Color } from '@/src/constants/colors'
import IconsPath from '@/src/constants/IconsPath'
import { Href, router } from 'expo-router'
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

type Category = {
  label: string
  icon: keyof typeof IconsPath
  route: Href // Usa el tipo Href para las rutas
}

const categories: Category[] = [
  {
    label: 'Categorias',
    icon: 'iconEdit2',
    route: '/(mypublications)/editCategory' as Href,
  },
  {
    label: 'Datos',
    icon: 'iconEdit2',
    route: '/(mypublications)/editFormVehicle' as Href,
  },
  {
    label: 'Fotos',
    icon: 'iconEdit2',
    route: '/(mypublications)/selectPict' as Href,
  },
  {
    label: 'Precio',
    icon: 'iconEdit2',
    route: '/(mypublications)/price' as Href,
  },
] as const

const Edit = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Color.primary} barStyle="light-content" />
      <HeaderMainComponent
        titulo="Edicion"
        onBackPress={() => router.replace('/(tabs)/myPublications')}
      />
      <Text style={styles.title}>Elegí los datos que queres modificar</Text>

      <View style={styles.categoryList}>
        {categories.map((item) => (
          <TouchableOpacity
            key={item.label}
            style={styles.card}
            onPress={() => router.push(item.route)}
          >
            <Image source={IconsPath[item.icon]} style={styles.icon} />
            <Text style={styles.cardText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => router.push('/(tabs)/myPublications')}
        >
          <Text style={styles.buttonText}>Volver</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Edit

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingVertical: verticalScale(40),
    paddingHorizontal: moderateScale(20),
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: verticalScale(10),
  },
  buttonText: {
    fontSize: moderateScale(16),
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  categoryList: {
    width: '95%',
  },
  card: {
    height: moderateScale(90),
    backgroundColor: '#f1e9f9',
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(10),
    marginBottom: moderateScale(20),
    borderRadius: moderateScale(20),
  },
  icon: {
    marginRight: moderateScale(16),
  },
  cardText: {
    marginLeft: moderateScale(25),
    fontSize: moderateScale(24),
    fontWeight: '600',
  },
  buttonBack: {
    width: moderateScale(170),
    height: moderateScale(55),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(20),
    marginBottom: moderateScale(20),
    backgroundColor: '#A230C7',
  },
  buttonContainer: {
    alignItems: 'center',
  },
})
