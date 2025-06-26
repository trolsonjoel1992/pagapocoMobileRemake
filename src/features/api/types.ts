export type VehicleCategory = 'car' | 'truck' | 'motorcycle' | 'part'

interface BaseDetails {
  brand: string
  model: string
  color: string | null
}

export interface CarTruckDetails extends BaseDetails {
  year: number
  transmission: 'manual' | 'automatic'
  fuelType: 'gasoline' | 'diesel' | 'electric'
  engineDisplacement: number
  kilometers: number
  version: string
  doors: number
}

export interface MotorcycleDetails extends BaseDetails {
  year: number
  transmission: 'manual' | 'automatic'
  fuelType: 'gasoline' | 'electric'
  engineDisplacement: number
  kilometers: number
  motorcycleType: 'sport' | 'cruiser' | 'off-road'
  wheelSize: number
}

export interface PartDetails extends BaseDetails {
  condition: 'new' | 'used' | 'reconditioned'
  compatibility: string
}

// Tipo unión que representa todos los posibles detalles
export type PublicationDetails =
  | CarTruckDetails
  | MotorcycleDetails
  | PartDetails

// Tipo guard para verificar el tipo de detalles
export function isCarTruckDetails(
  details: PublicationDetails,
  category: VehicleCategory
): details is CarTruckDetails {
  return category === 'car' || category === 'truck'
}

export function isMotorcycleDetails(
  details: PublicationDetails,
  category: VehicleCategory
): details is MotorcycleDetails {
  return category === 'motorcycle'
}

export function isPartDetails(
  details: PublicationDetails,
  category: VehicleCategory
): details is PartDetails {
  return category === 'part'
}

export interface Publication {
  id: number
  title: string
  price: number
  description: string
  category: VehicleCategory
  isPremium: boolean
  isSold: boolean
  isPaused: boolean
  user_id: number
  details: PublicationDetails
}
