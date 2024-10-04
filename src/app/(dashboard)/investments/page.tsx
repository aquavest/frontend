"use client";

import { useEffect, useState } from "react";
import { DollarSignIcon, FishIcon, ClockIcon } from "lucide-react";
import { useAccount, useReadContracts } from "wagmi";
import { formatUnits } from "viem";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { pools } from "@/lib/mocks/pools";
import { fishTokenContract, investmentPoolsContract } from "@/assets";

type Result = {
  error?: undefined;
  result: unknown;
  status: "success";
  id?: number;
};

export default function InvestmentsPage() {
  const [poolInvestments, setPoolInvestments] = useState<Pool[]>([]);
  const { address } = useAccount();
  const contracts = pools.map((pool) => ({
    ...investmentPoolsContract,
    functionName: "userFishBalance",
    args: [BigInt((pool.id || 1) - 1), address],
  }));

  const { data } = useReadContracts({
    contracts: contracts as any,
  });

  const { data: fishDecimals } = useReadContracts({
    contracts: [
      {
        ...fishTokenContract,
        functionName: "decimals",
      },
    ],
  });

  useEffect(() => {
    const dataWithId = data?.map((result, index) => {
      const res = result as Result;
      res.id = index;
      return res;
    });
    const filterIds = dataWithId?.filter((result) => {
      return (result.result as any) !== BigInt("0");
    });
    const newPools = filterIds?.map((result) => {
      return pools.filter((pool) => {
        pool.amount = result.result as bigint;
        return pool.id - 1 === result.id;
      })[0];
    });

    setPoolInvestments(newPools || []);
  }, [data]);

  return (
    <main>
      <h2 className="text-2xl font-semibold mb-4">Your Investments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {poolInvestments.map((investment) => (
          <Card key={investment.id}>
            <CardHeader>
              <CardTitle>{investment.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-2">
                <DollarSignIcon className="h-5 w-5" />
                <p>
                  Investment:{" "}
                  {formatUnits(
                    investment?.amount || BigInt(0),
                    fishDecimals?.[0]?.result as number,
                  )}{" "}
                  USDC
                </p>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <FishIcon className="h-5 w-5" />
                <p>
                  FISH Tokens:{" "}
                  {formatUnits(
                    investment?.amount || BigInt(0),
                    fishDecimals?.[0]?.result as number,
                  )}{" "}
                </p>
              </div>
              <p>Current ROI: {investment.currentROI}</p>
              <div className="flex items-center space-x-2 mt-4">
                <ClockIcon className="h-5 w-5" />
                <p>Claim in {investment.claimIn} days</p>
              </div>
            </CardContent>
            {/* // TODO Claim button */}
          </Card>
        ))}
      </div>
    </main>
  );
}
