import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const Store = () => {
    return (
        <SafeAreaView style={styles.container}>

          <View style={styles.header}>
            <Text>Header</Text>
          </View>
          
          <View style={styles.body}>
            <Text>Body</Text>
            <Text style={{ fontSize: 24, color: "white" }}>Vender</Text>
          </View>
          
          <View style={styles.footer}>
            <Text>Footer</Text>
          </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: verticalScale(70),
  },
  header: {
    height: moderateScale(40),
    width: "100%",
    backgroundColor: "red",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    height: moderateScale(60),
    width: "100%",
    backgroundColor: "gray",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: moderateScale(40),
    width: "100%",
    backgroundColor: "red",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Store;

