import ImagesPath from '@/src/constants/ImagesPath'
import { Control, Controller, FieldError } from 'react-hook-form'
import {
  Image,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

interface ControlledInputProps<T extends Record<string, any>> {
  name: keyof T
  label: string
  placeholder: string
  keyboardType: KeyboardTypeOptions
  returnKeyType: ReturnKeyTypeOptions
  ref?: React.RefObject<TextInput | null>
  control: Control<T>
  error?: FieldError
  onSubmitInput: () => void
}

export type Input<T> = {
  key: keyof T
  label: string
  placeholder: string
  ref?: React.RefObject<TextInput | null>
  keyboardType: KeyboardTypeOptions
  returnKeyType: ReturnKeyTypeOptions
}

const ControlledInput = <T extends Record<string, any>>(
  props: ControlledInputProps<T>
) => {
  const {
    name,
    control,
    error,
    keyboardType,
    label,
    placeholder,
    returnKeyType,
    ref,
    onSubmitInput,
  } = props

  return (
    <Controller
      control={control}
      name={name as any}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={styles.inputGroup}>
          <Text style={styles.label}>{label}</Text>
          <View style={styles.inputContainer}>
            <TextInput
              ref={ref}
              placeholder={placeholder}
              placeholderTextColor="#999"
              keyboardType={keyboardType}
              style={styles.input}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value ? String(value) : ''}
              returnKeyType={returnKeyType}
              onSubmitEditing={onSubmitInput}
            />
            <Image source={ImagesPath.iconNotePencil} />
          </View>
          {error && <Text style={styles.error}>{error.message}</Text>}
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
  error: { color: 'red', fontSize: 12, paddingLeft: 4 },
})

export default ControlledInput
