const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const API_KEY = process.env.X_API_KEY

export const fetchWithApiKey = async (endpoint: string): Promise<Response> => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': API_KEY || '',
    }
  })

  if (!response.ok) {
    throw new Error(`APIリクエストに失敗しました: ${response.status}`)
  }

  return response
}

export const getPrefectures = async (): Promise<any> => {
  const response = await fetchWithApiKey('/prefectures')
  return response.json()
}

export const getPopulation = async (prefCode: number): Promise<any> => {
  const response = await fetchWithApiKey(`/population/composition/perYear?prefCode=${prefCode}`)
  return response.json()
}