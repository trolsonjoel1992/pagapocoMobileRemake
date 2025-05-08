import SkeletorComponent from '@/src/components/atoms/SkeletorComponent'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const MainScreen = () => {

  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    // mostrar skeleton durante 2 segundos
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showSkeleton) {
    return (
      <SafeAreaView style={styles.skeletonContainer}>
        <SkeletorComponent />
      </SafeAreaView>
    );
  }  

  return (
    <SafeAreaView style={styles.container}>

        <View style={styles.header}>
            <Text>Header</Text>
        </View>

        <View style={styles.body}>
            <Text>Body</Text>
            <Text>Pantalla donde iria las publicaciones</Text>
        </View>

        <View style={styles.footer}>
            <Text>Footer</Text>
        </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: verticalScale(70),
    },
    header: {},
    body: {
      //justifyContent: 'center',
      alignItems: 'center'
    },
    footer: {},
    // Nuevos estilos para skeleton
  skeletonContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: moderateScale(70),
  },
  skeletonHeader: {
    height: verticalScale(20),
    width: "100%",
    backgroundColor: "#f0f0f0",
  },
  skeletonBody: {
    alignItems: "center",
    gap: verticalScale(7),
  },
  skeletonLogo: {
    height: moderateScale(100),
    width: moderateScale(100),
    backgroundColor: "#f0f0f0",
    borderRadius: moderateScale(10),
  },
  skeletonFooter: {
    alignItems: "center",
    height: verticalScale(70),
    justifyContent: "flex-end",
  },
  skeletonText: {
    width: moderateScale(150),
    height: verticalScale(15),
    backgroundColor: "#f0f0f0",
  },
});

export default MainScreen