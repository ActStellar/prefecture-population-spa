export interface PopulationData {
  year: number
  value: number
}

export interface PopulationComposition {
  label: string
  data: PopulationData[]
}

export interface PopulationResponse {
  message: string | null
  result: {
    boundaryYear: number
    data: PopulationComposition[]
  }
}