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
  color: yup.string().required('Color obligatorio'),
  motorcycleType: yup.string().required('Tipo de moto obligatorio'),
  fuelType: yup.string().required('Tipo de combustible obligatorio'),
  wheelSize: yup
    .number()
    .typeError('Debe ser un número')
    .min(2, 'Rodado no puede ser menor a 12')
    .max(5, 'Rodado no puede ser mayor a 19')
    .required('Rodado obligatorio'),
  transmision: yup.string().required('Transmisión obligatorio'),
  engine: yup.string().required('Cilindrada obligatorio'),
  kilometer: yup
    .number()
    .typeError('Debe ser un número')
    .min(1, 'Kilometros no puede ser menor a 1')
    .required('Kilómetros obligatorio'),
  description: yup.string().notRequired() as yup.StringSchema<string>,
})

export type MotorcycleData = yup.InferType<typeof motorcycleSchema>
