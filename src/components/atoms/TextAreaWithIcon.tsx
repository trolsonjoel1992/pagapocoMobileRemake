// TextAreaWithIcon.tsx
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { StyleSheet, Text, TextInput, View } from 'react-native'

type Props = {
  name: string
  label: string
}

export default function TextAreaWithIcon({ name, label }: Props) {
  const { control } = useFormContext()

  return (
    <View style={styles.group}>
      <Text style={styles.label}>{label}</Text>

      <Controller
        name={name}
        control={control}
        rules={{ required: `${label} es obligatorio` }}
        render={({ field, fieldState }) => (
          <>
            <View style={[styles.container, fieldState.error && styles.containerError]}>
              <TextInput
                value={field.value}
                onChangeText={field.onChange}
                onBlur={field.onBlur}
                multiline
                placeholder={`Escribí tu ${label.toLowerCase()}`}
                style={styles.textArea}
                placeholderTextColor="#aaa"
              />
              <Ionicons name="create-outline" size={20} color="#333" style={styles.icon} />
            </View>

            {fieldState.error && (
              <Text style={styles.error}>{fieldState.error.message}</Text>
            )}
          </>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  group: {
    marginBottom: 20,
  },
  label: {
    fontWeight: '600',
    marginBottom: 8,
    fontSize: 16,
    color: '#444',
  },
  container: {
    backgroundColor: '#f1e8f8',
    borderRadius: 12,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    minHeight: 120,
  },
  containerError: {
    borderWidth: 1,
    borderColor: 'red',
  },
  textArea: {
    flex: 1,
    fontSize: 16,
    textAlignVertical: 'top',
    color: '#333',
    maxHeight: 150,
  },
  icon: {
    marginLeft: 10,
    marginTop: 4,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
})
