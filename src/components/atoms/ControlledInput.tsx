import IconsPath from '@/src/constants/IconsPath'
import React from 'react'
import {
  Controller,
  FieldValues,
  Path,
  useFormContext,
} from 'react-hook-form'; // herramientas para formularios controlados

import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native'; // componentes de interfaz de usuario de react native

// definición de las props del componente controlado
export interface ControlledInputProps<T extends FieldValues>
  extends TextInputProps {
  name: Path<T> // nombre del campo en el formulario
  label: string // etiqueta visible del campo
}

// componente de input controlado genérico para formularios
const ControlledInput = <T extends FieldValues>({
  name,
  label,
  ...props
}: ControlledInputProps<T>) => {
  const {
    control,
    setFocus,
    formState: { isSubmitted },
  } = useFormContext<T>() // obtiene el contexto del formulario

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: `${label} es obligatorio`, // validación de campo obligatorio
        ...(props.keyboardType === 'email-address' && {
          pattern: {
            value: /^\S+@\S+\.\S+$/, // validación de formato de email
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
              value={field.value ? String(field.value) : ''} // asegura que el valor sea string
              returnKeyType="next"
              onSubmitEditing={() => {
                setFocus(name) // enfoca el siguiente campo al enviar
              }}
            />
            {!isSubmitted && <Image source={IconsPath.notePencil} />} // ícono de lápiz antes de enviar
            {isSubmitted && !fieldState.error ? (
              <Image source={IconsPath.checkSquare} /> // ícono de éxito si no hay error
            ) : (
              fieldState.error && <Image source={IconsPath.errorSquare} /> // ícono de error si hay error
            )}
          </View>
          {fieldState.error && (
            <Text style={styles.error}>{fieldState.error.message}</Text> // muestra mensaje de error
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
  error: {
    color: 'red',
    fontSize: 12,
    paddingLeft: 4,
    paddingTop: 4,
  },
})

export default ControlledInput

