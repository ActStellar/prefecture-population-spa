import { PopulationComposition } from '@/types/population';

export const formatPopulationData = (data: PopulationComposition[], label: string) => {
  return data.find((item) => item.label === label)?.data || [];
};
