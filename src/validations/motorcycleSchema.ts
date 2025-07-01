import * as yup from 'yup'

export const motorcycleSchema = yup.object().shape({
  brand: yup.string().required('Marca obligatoria'),
  model: yup.string().required('Modelo obligatorio'),
  year: yup
    .number()
    .typeError('Debe ser un número')
    .min(1900, 'Año no puede ser menor a 1900')
    .max(new Date().getFullYear(), 'Año no puede ser mayor al actual')
    .required('Año obligatorio'),
  color: yup.string().notRequired() as yup.StringSchema<string>,
  motorcycleType: yup.string().notRequired() as yup.StringSchema<string>,
  fuelType: yup.string().notRequired() as yup.StringSchema<string>,
  wheelSize: yup
    .number()
    .typeError('Debe ser un número')
    .min(2, 'Rodado no puede ser menor a 12')
    .max(5, 'Rodado no puede ser mayor a 19')
    .notRequired() as yup.NumberSchema<number>,
  transmision: yup.string().notRequired() as yup.StringSchema<string>,
  engine: yup.string().notRequired() as yup.StringSchema<string>,
  kilometer: yup
    .number()
    .typeError('Debe ser un número')
    .min(1, 'Kilometros no puede ser menor a 1')
    .notRequired() as yup.NumberSchema<number>,
  description: yup.string().notRequired() as yup.StringSchema<string>,
})

export type MotorcycleData = yup.InferType<typeof motorcycleSchema>
