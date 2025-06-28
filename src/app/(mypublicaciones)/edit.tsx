import HeaderMainComponent from '@/src/components/atoms/HeaderMainComponent'
import IconsPath from '@/src/constants/IconsPath'
import { Href, router } from 'expo-router'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
    route: '/(tabs)/(myPublications)/myPublications' as Href,
  },
  {
    label: 'Datos',
    icon: 'iconEdit2',
    route: '/(tabs)/(myPublications)/myPublications' as Href,
  },
  {
    label: 'Fotos',
    icon: 'iconEdit2',
    route: '/(mypublicaciones)/selectPict' as Href,
  },
  {
    label: 'Precio',
    icon: 'iconEdit2',
    route: '/(mypublicaciones)/price' as Href,
  },
] as const

const Edit = () => {
  return (
    <View style={styles.container}>
      <HeaderMainComponent
        titulo="Inicio de sesión"
        onBackPress={() =>
          router.push('/(tabs)/(myPublications)/myPublications')
        }
      />
      <Text style={styles.title}>Elegí los datos que queres modificar</Text>

      <View style={styles.categoryList}>
        {categories.map((item) => (
          <TouchableOpacity
            key={item.label}
            style={styles.card}
            onPress={() => router.push(item.route)} // Navega a la ruta correspondiente
          >
            <Image source={IconsPath[item.icon]} style={styles.icon} />
            <Text style={styles.cardText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => router.push('/(tabs)/(myPublications)/myPublications')}
        >
          <Text style={styles.buttonText}>Volver</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    backgroundColor: '#f1e9f9',
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(10),
    marginBottom: moderateScale(20),
    borderRadius: 20,
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
