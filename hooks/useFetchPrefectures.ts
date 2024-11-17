import { useState, useEffect } from 'react'
import { Prefecture } from '@/types/prefecture'
import { getPrefectures } from '@/utils/apiHelpers'

export const useFetchPrefectures = () => {
  const [prefecture, setPrefecture] = useState<Prefecture[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPrefectures = async () => {
      try {
        const data = await getPrefectures()
        setPrefecture(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : '不明なエラーが発生しました')
      }
    }

    fetchPrefectures()
  }, [])

  return {prefecture, error}
}