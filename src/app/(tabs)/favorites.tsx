import ImagesPath from '@/src/constants/ImagesPath';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const Favorities = () => {

    let isLogin = false;

    if (isLogin) {
        return (
        <SafeAreaView style={styles.container}>

          <View style={styles.header}>
            <Text>Header</Text>
          </View>
          
          <View style={styles.body}>
            <Text>Body</Text>
            <Text style={{ fontSize: 24, color: "white" }}>Mis Favoritos</Text>
          </View>
          
          <View style={styles.footer}>
            <Text>Footer</Text>
          </View>

        </SafeAreaView>
        );
    } else {
        return (
            <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                {/* <Text>Header</Text> */}
            </View>
            
            <View style={styles.body}>

                {/* <Text>Body</Text>
                <Text style={{ fontSize: 24, color: "white" }}>Mis NO Favoritos</Text> */}
                
                <Image 
                    source={ImagesPath.imageFavoritesNotLogin}
                    style={styles.imageNotLogin}
                    resizeMode='contain'
                />

                <View style={styles.textContainer}>

                  <Text style={{ fontSize: 24, fontWeight: "bold" }}>¿Querés ver tus favoritos?</Text>
                  
                  <TouchableOpacity
                    onPress={() => router.push("/(auth)/FormLogin")}
                  >
                    <Text style={{ fontSize: 14, color: "blue" }}>Ingresá a tu cuenta</Text>
                  </TouchableOpacity>
                
                </View>
                
            </View>
            
            <View style={styles.footer}>
                {/* <Text>Footer</Text> */}
            </View>

            </SafeAreaView>
        );
    }
    
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F4F2",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: verticalScale(70),
  },
  header: {
    height: moderateScale(40),
    width: "100%",
    //backgroundColor: "red",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    height: moderateScale(60),
    width: "100%",
    //backgroundColor: "gray",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: moderateScale(40),
    width: "100%",
    //backgroundColor: "red",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  imageNotLogin: {
    width: moderateScale(300),
    height: moderateScale(300),
  },
  textContainer: {
    justifyContent: "center",
    gap: moderateScale(15),
    alignItems: "center"
  }
});

export default Favorities;

