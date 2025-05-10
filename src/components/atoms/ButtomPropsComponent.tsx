// src/components/atoms/BottomComponent.tsx
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

interface BottomComponentProps {
  titulo: string;
  onPress?: () => void;
}

const BottomComponent = ({ titulo, onPress }: BottomComponentProps) => {
  return (
    <TouchableOpacity 
      style={styles.bottomContainer}
      onPress={onPress}
    >
      <Text style={styles.buttomText}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    bottomContainer: {
        backgroundColor: "#ECE6F0",
        width: "100%",
        paddingVertical: verticalScale(10),
        paddingHorizontal: verticalScale(10),
        borderRadius: moderateScale(20),
        alignItems: "center",
    },
    buttomText: {
        color: "black",
        fontSize: moderateScale(13),
        fontWeight: "bold",
    }
});

export default BottomComponent;