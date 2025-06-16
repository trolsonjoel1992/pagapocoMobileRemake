import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

type filterInputProps = {
  title?: string
  placeholder?: string
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad'
  backgroundColor?: string
}

const InputFilterComponent = ({
  title = 'Titulo',
  placeholder = 'Ingresar',
  keyboardType = 'default',
  backgroundColor = '#fff',
}: filterInputProps) => {
  return (
    <View style={[styles.inputContainer, { backgroundColor }]}>
      <Text style={{ fontWeight: 'bold' }}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        style={styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    height: moderateScale(45),
    flexDirection: 'row',
    //backgroundColor: '#f0f0f0',
    borderRadius: moderateScale(24),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10),
    //marginBottom: moderateScale(10),
  },
  input: {
    width: '60%',
    height: moderateScale(40),
    borderColor: '#ccc',
    //borderWidth: 1,
    borderRadius: moderateScale(24),
    paddingHorizontal: moderateScale(10),
  },
})

export default InputFilterComponent
