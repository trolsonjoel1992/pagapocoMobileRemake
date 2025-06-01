import * as yup from 'yup'

export const truckSchema = yup.object().shape({
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
})
