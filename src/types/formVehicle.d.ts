import { truckSchema } from '@/src/validations/truckSchema'
import {
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  TextInput,
} from 'react-native'
import * as yup from 'yup'

export type FormData = yup.InferType<typeof truckSchema>

export type Input = {
  key: keyof FormData
  label: string
  placeholder: string
  ref?: React.RefObject<TextInput | null>
  keyboardType: KeyboardTypeOptions
  returnKeyType: ReturnKeyTypeOptions
}
