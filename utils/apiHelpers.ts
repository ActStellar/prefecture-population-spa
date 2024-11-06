const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export const getPrefecturesEndpoint = (): string => `${BASE_URL}/prefectures`

export const getPopulationEndpoint = (prefCode: number): string => `${BASE_URL}/population/composition/perYear?prefCode=${prefCode}`