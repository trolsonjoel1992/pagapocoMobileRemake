import IconsPath from '@/src/constants/IconsPath'
import React from 'react'
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form'
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native'

export interface ControlledInputProps<T extends FieldValues>
  extends TextInputProps {
  name: Path<T>
  label: string
  nextInputName?: Path<T>
}

const ControlledInput = <T extends FieldValues>({
  name,
  label,
  nextInputName,
  ...props
}: ControlledInputProps<T>) => {
  const {
    control,
    setFocus,
    formState: { isSubmitted },
  } = useFormContext<T>()

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: `${label} es obligatorio`,
        ...(props.keyboardType === 'email-address' && {
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: 'Formato de correo inválido',
          },
        }),
      }}
      render={({ field, fieldState }) => (
        <View style={styles.inputGroup}>
          <Text style={styles.label}>{label}</Text>
          <View style={styles.inputContainer}>
            <TextInput
              {...field}
              {...props}
              placeholderTextColor="#999"
              style={styles.input}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={field.value ? String(field.value) : ''}
              returnKeyType={nextInputName ? 'next' : 'done'}
              onSubmitEditing={() => {
                if (nextInputName) {
                  setFocus(nextInputName)
                }
              }}
            />
            {!isSubmitted && (
              <Image source={IconsPath.notePencil} style={styles.icon} />
            )}
            {isSubmitted && !fieldState.error ? (
              <Image source={IconsPath.checkSquare} style={styles.icon} />
            ) : (
              isSubmitted &&
              fieldState.error && (
                <Image source={IconsPath.errorSquare} style={styles.icon} />
              )
            )}
          </View>
          {fieldState.error && (
            <Text style={styles.error}>{fieldState.error.message}</Text>
          )}
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  inputGroup: {
    marginBottom: 14,
  },
  label: {
    marginBottom: 6,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#F0EAF5',
    borderRadius: 12,
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: 44,
    fontSize: 16,
    color: '#333',
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 8,
  },
  error: {
    color: 'red',
    fontSize: 12,
    paddingLeft: 4,
    paddingTop: 4,
  },
})

export default ControlledInput
