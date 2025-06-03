import { Color } from '@/src/constants/colors'
import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode
  variant: 'contained' | 'outlined' | 'transparent'
  fullWidth?: boolean
}

const Button = (props: ButtonProps) => {
  const { children, variant, fullWidth, ...otherProps } = props

  return (
    <TouchableOpacity
      style={[
        buttonStyles.button,
        fullWidth && buttonStyles.fullWidth,
        buttonStyles[variant],
      ]}
      activeOpacity={0.7}
      {...otherProps}
    >
      <Text style={[textStyles.text, textStyles[variant]]}>{children}</Text>
    </TouchableOpacity>
  )
}

const buttonStyles = StyleSheet.create({
  button: {
    marginTop: verticalScale(20),
    paddingVertical: verticalScale(10),
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(20),
    alignItems: 'center',
    alignSelf: 'center',
    // elevation: 4,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 0.3,
    // shadowRadius: 4,
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
  transparent: {
    backgroundColor: Color.background,
    borderWidth: 1,
    borderColor: 'black',
  },
  contained: {
    backgroundColor: Color.primary,
  },
  outlined: {
    backgroundColor: '#DAACE9',
  },
})

const textStyles = StyleSheet.create({
  text: {
    fontWeight: '600',
    fontSize: 16,
  },
  transparent: {
    color: Color.text,
  },
  contained: {
    color: 'white',
  },
  outlined: {
    color: 'black',
  },
})

export default Button
