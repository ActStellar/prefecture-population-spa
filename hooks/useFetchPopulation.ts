import { useState, useEffect } from 'react'
import { PopulationResponse } from '@/types/population'
import { getPopulationEndpoint } from '@/utils/apiHelpers'

export const useFetchPopulation = (prefCode: number) => {
  const [populationData, setPopulationData] = useState<PopulationResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPopulation = async () => {
      try {
        const response = await fetch(getPopulationEndpoint(prefCode))
        if (!response.ok) throw new Error('人口データの取得に失敗しました')
        const data = await response.json()
        setPopulationData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : '不明なエラーが発生しました')
      }
    }

    if (prefCode) fetchPopulation()
  }, [prefCode])

  return {populationData, error}
}