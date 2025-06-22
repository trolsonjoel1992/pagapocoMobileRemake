import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

type Props = {
  checked: boolean
  onToggle: () => void
  size?: number
  color?: string
}

const CustomCheckbox = ({ checked, onToggle, size = 24, color = '#A230C7' }: Props) => {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.container}>
      <View style={[styles.box, { borderColor: color, width: size, height: size }]}>
        {checked && (
          <MaterialIcons name="check" size={size * 0.8} color={color} />
        )}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  box: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
})

export default CustomCheckbox
