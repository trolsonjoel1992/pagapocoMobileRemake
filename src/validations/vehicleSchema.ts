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
  version: yup.string().required('Versión obligatoria'),
  color: yup.string().required('Color obligatorio'),
  fuelType: yup.string().required('Tipo de combustible obligatorio'),
  doors: yup
    .number()
    .typeError('Debe ser un número')
    .min(2, 'Puertas no puede ser menor a 2')
    .max(5, 'Puertas no puede ser mayor a 5')
    .required('Puertas obligatorio'),
  transmision: yup.string().required('Transmisión obligatorio'),
  engine: yup.string().required('Cilindrada obligatorio'),
  kilometer: yup
    .number()
    .typeError('Debe ser un número')
    .min(1, 'Kilometros no puede ser menor a 1')
    .required('Kilómetros obligatorio'),
  description: yup.string().notRequired() as yup.StringSchema<string>,
})

export type VehicleData = yup.InferType<typeof vehicleSchema>
