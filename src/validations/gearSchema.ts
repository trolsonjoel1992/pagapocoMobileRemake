import * as yup from 'yup'

export const gearSchema = yup.object().shape({
  brand: yup.string().required('Marca obligatoria'),
  model: yup.string().required('Modelo obligatorio'),
  color: yup.string().required('Color obligatorio'),
  state: yup.string().required('Estado obligatorio'),
  compatibility: yup.string().required('Compatibilidad obligatorio'),
  description: yup.string().notRequired() as yup.StringSchema<string>,
})

export type GearData = yup.InferType<typeof gearSchema>
