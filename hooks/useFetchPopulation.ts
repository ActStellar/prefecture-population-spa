import { useState, useEffect } from 'react'
import { PopulationResponse } from '@/types/population'
import { getPopulation } from '@/utils/apiHelpers'

export const useFetchPopulation = (prefCode: number) => {
  const [populationData, setPopulationData] = useState<PopulationResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPopulation = async () => {
      try {
        const data = await getPopulation(prefCode)
        setPopulationData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : '不明なエラーが発生しました')
      }
    }

    if (prefCode) fetchPopulation()
  }, [prefCode])

  return {populationData, error}
}