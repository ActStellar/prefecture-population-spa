import { useState, useEffect } from 'react'
import { Prefecture } from '@/types/prefecture'
import { getPrefecturesEndpoint } from '@/utils/apiHelpers'

export const useFetchPrefectures = () => {
  const [prefecture, setPrefecture] = useState<Prefecture[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPrefectures = async () => {
      try {
        const response = await fetch(getPrefecturesEndpoint())
        if (!response.ok) throw new Error('都道府県データの取得に失敗しました')
        const data = await response.json()
        setPrefecture(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : '不明なエラーが発生しました')
      }
    }
    fetchPrefectures()
  }, [])

  return {prefecture, error}
}