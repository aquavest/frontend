declare type Pool = {
  id: number;
  name: string;
  targetHarvest: string;
  location: string;
  expectedROI: string;
  daysRemaining: number;
  claimIn?: number;
  currentROI?: string;
  amount?: bigint;
};
