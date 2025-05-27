import TabsLayout from "@/src/app/(tabs)/_layout";
import ImagesPath from "@/src/constants/ImagesPath";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

const categories = [
  { label: 'Camiones', icon: 'iconTruck' },
  { label: 'Camionetas', icon: 'iconCarProfile' },
  { label: 'Autos', icon: 'iconCar' },
  { label: 'Motos', icon: 'iconMotorcycle' },
  { label: 'Piezas', icon: 'iconGear' },
] as const;


const Sell =()=>{
    return<SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>¡Vendé!</Text>
        <Text style={styles.subtitle}>Selecciona la categoría de venta</Text>

        <View style={styles.categoryList}>
          {categories.map((item) => (
            <TouchableOpacity key={item.label} style={styles.card}>
               <Image
                        source={ImagesPath[item.icon]}
                        style={styles.icon}
                      />
              <Text style={styles.cardText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <TabsLayout />
    </SafeAreaView>
}

export default Sell

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingVertical: verticalScale(40),
    paddingHorizontal: moderateScale(20),
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    marginBottom: verticalScale(10),
  },
  subtitle: {
    fontSize: moderateScale(16),
    marginBottom: verticalScale(20),
    textAlign: 'center',
  },
  categoryList: {
    width: '100%',
  },
  card: {
    backgroundColor: '#f1e9f9',
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(20),
    borderRadius: 20,
    marginBottom: verticalScale(18),
  },
    icon: {
    marginRight: moderateScale(16),
  },
  cardText: {
    fontSize: moderateScale(18),
    fontWeight: '600',
  },
});