import { GearData } from '@/src/validations/gearSchema'
import { MotorcycleData } from '@/src/validations/motorcycleSchema'
import { VehicleData } from '@/src/validations/vehicleSchema'
import { createContext, useContext, useState } from 'react'

export type PublicationData = {
  images?: string[]
  isPremium?: boolean
  title?: string
  price?: number
  city?: string
  details?: VehicleData | GearData | MotorcycleData
}

const CreatePublication = createContext<{
  publicationData: PublicationData
  setPublicationData: React.Dispatch<React.SetStateAction<PublicationData>>
}>({ publicationData: {}, setPublicationData: () => {} })

export const CreatePublicationProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [publicationData, setPublicationData] = useState<PublicationData>({})
  return (
    <CreatePublication.Provider value={{ publicationData, setPublicationData }}>
      {children}
    </CreatePublication.Provider>
  )
}

export const useCreatePublication = () => useContext(CreatePublication)
