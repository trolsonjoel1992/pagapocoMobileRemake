import * as yup from 'yup'

export const gearSchema = yup.object().shape({
  brand: yup.string().required('Marca obligatoria'),
  model: yup.string().required('Modelo obligatorio'),
  color: yup.string().notRequired() as yup.StringSchema<string>,
  state: yup.string().notRequired() as yup.StringSchema<string>,
  compatibility: yup.string().notRequired() as yup.StringSchema<string>,
  description: yup.string().notRequired() as yup.StringSchema<string>,
})

export type GearData = yup.InferType<typeof gearSchema>
