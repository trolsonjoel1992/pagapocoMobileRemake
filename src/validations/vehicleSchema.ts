import * as yup from 'yup'

export const vehicleSchema = yup.object().shape({
  brand: yup.string().required('Marca obligatoria'),
  model: yup.string().required('Modelo obligatorio'),
  year: yup
    .number()
    .typeError('Debe ser un número')
    .min(1900, 'Año no puede ser menor a 1900')
    .max(new Date().getFullYear(), 'Año no puede ser mayor al actual')
    .required('Año obligatorio'),
  version: yup.string().notRequired() as yup.StringSchema<string>,
  color: yup.string().notRequired() as yup.StringSchema<string>,
  fuelType: yup.string().notRequired() as yup.StringSchema<string>,
  doors: yup
    .number()
    .typeError('Debe ser un número')
    .min(2, 'Puertas no puede ser menor a 2')
    .max(5, 'Puertas no puede ser mayor a 5')
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

export type VehicleData = yup.InferType<typeof vehicleSchema>
