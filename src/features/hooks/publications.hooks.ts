import {
  apiCreatePublication,
  apiListPublication,
} from '@/src/features/api/publications.api'
import { useCallback, useEffect, useState } from 'react'

export const useListPublications = () => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<null | string>(null)

  const fetchData = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      await new Promise((res) => setTimeout(res, 500))
      const result = await apiListPublication()
      setData(result)
    } catch (e) {
      console.error('Error al cargar publicaciones:', e)
      setError('Error al cargar publicaciones')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, loading, error, refetch: fetchData }
}

export function useCreatePublication() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const [success, setSuccess] = useState(false)

  const create = useCallback(async (newPublication: any) => {
    setLoading(true)
    setError(null)
    setSuccess(false)
    try {
      // Emula delay
      await new Promise((res) => setTimeout(res, 500))
      const ok = await apiCreatePublication(newPublication)
      setSuccess(ok)
      return ok
    } catch (e) {
      console.error('Error al crear publicación:', e)
      setError('Error al crear publicación')
      setSuccess(false)
      return false
    } finally {
      setLoading(false)
    }
  }, [])

  return { create, loading, error, success }
}
