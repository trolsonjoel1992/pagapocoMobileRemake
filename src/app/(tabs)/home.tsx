import SkeletorComponent from "@/src/components/atoms/SkeletorComponent";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

const HomeScreen = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");

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
    <SafeAreaView style={styles.safeArea}>

      <View>

        <View style={styles.header}>

          <Searchbar
            placeholder="Buscar..."
            onChangeText={(query) => setSearchQuery(query)}
            value={searchQuery}
            icon="magnify"
            clearIcon="close"
            style={styles.searchBar}
            inputStyle={styles.searchBarInput}
            iconColor="#3498db"
            placeholderTextColor="#95a5a6"
          />

          <Text style={styles.headerText}>Header</Text>

        </View>

        <View style={styles.body}>
          <Text>Bodyss</Text>
          <Text>Pantalla donde irian las publicaciones</Text>
        </View>

        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>

      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ---------
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchBar: {
    elevation: 4,
    borderRadius: verticalScale(24),
    width: '95%',
    marginBottom: verticalScale(10),
    alignSelf: 'center',
    height: verticalScale(45),
  },
  searchBarInput: {
    fontSize: 16,
  },
  headerText: {
    marginTop: verticalScale(5),
  },
  // ------
  // estilos anteriores
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    //paddingVertical: verticalScale(70),
  },
  header: {
    // -------
    width: '100%',
    paddingTop: verticalScale(10),
    alignItems: 'center',
    paddingHorizontal: moderateScale(10),
    marginBottom: verticalScale(15),
    // -------
  },
  body: {
    alignItems: 'center',
    // -----
    flex: 1,
    width: '100%',
    paddingHorizontal: moderateScale(20),
    paddingTop: verticalScale(20),
    // ---
  },
  footer: {
    // -------
    width: '100%',
    paddingBottom: verticalScale(20),
    alignItems: 'center',
    // -------
  },
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

export default HomeScreen;
