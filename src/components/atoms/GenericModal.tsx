import React from 'react'
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { moderateScale } from 'react-native-size-matters'

interface GenericModalProps {
  imageSource: ImageSourcePropType
  messages: string[]
  showCancelButton?: boolean
  onContinue: () => void
  onCancel?: () => void
  continueButtonText?: string
  cancelButtonText?: string
}

const GenericModal: React.FC<GenericModalProps> = ({
  imageSource,
  messages,
  showCancelButton = true,
  onContinue,
  onCancel,
  continueButtonText = 'Continuar',
  cancelButtonText = 'Cancelar',
}) => {
  return (
    <View style={styles.containerIN}>
      <Image source={imageSource} style={styles.image} />

      {messages.map((message, index) => (
        <Text key={index} style={styles.message}>
          {message}
        </Text>
      ))}

      {showCancelButton && (
        <TouchableOpacity style={styles.button2} onPress={onCancel}>
          <Text style={styles.button2Text}>{cancelButtonText}</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.button} onPress={onContinue}>
        <Text style={styles.buttonText}>{continueButtonText}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default GenericModal

const styles = StyleSheet.create({
  containerIN: {
    width: moderateScale(350),
    height: moderateScale(390),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    padding: moderateScale(20),
  },
  image: {
    width: moderateScale(100),
    height: moderateScale(100),
    marginBottom: 30,
  },
  message: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#A230C7',
    width: 170,
    height: 55,
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    fontSize: moderateScale(24),
    color: 'white',
    fontWeight: 'bold',
  },
  button2: {
    backgroundColor: '#ECE6F0',
    width: 170,
    height: 55,
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  button2Text: {
    fontSize: moderateScale(24),
    color: '#343330',
    fontWeight: 'bold',
  },
})
