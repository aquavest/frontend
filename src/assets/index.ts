import { Address } from "viem";

import fishToken from "./fish-token.json";
import investmentPools from "./investment-pools.json";
import usdcToken from "./usdc-token.json";

export const fishTokenContract = {
  address: process.env.NEXT_PUBLIC_FISH_TOKEN_CONTRACT as Address,
  abi: fishToken.abi,
} as const;

export const investmentPoolsContract = {
  address: process.env.NEXT_PUBLIC_INVESTMENT_POOLS_CONTRACT as Address,
  abi: investmentPools.abi,
} as const;

export const usdcTokenContract = {
  address: process.env.NEXT_PUBLIC_USDC_TOKEN_CONTRACT as Address,
  abi: usdcToken.abi,
} as const;
