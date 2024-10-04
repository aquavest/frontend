"use client";

import { useEffect, useState } from "react";
import { useReadContracts } from "wagmi";

import { CreatePool } from "@/components/pools/create-pool";
import { PoolDetails } from "@/components/pools/pool-details";
import { investmentPoolsContract } from "@/assets";
import { pools } from "@/lib/mocks/pools";

const contracts = pools.map((pool) => ({
  ...investmentPoolsContract,
  functionName: "pools",
  args: [BigInt((pool.id || 1) - 1)],
}));

type Result = {
  error?: undefined;
  result: unknown;
  status: "success";
  id?: number;
};

export default function PoolsPage() {
  const [poolsData, setPoolsData] = useState<Pool[]>([]);
  const { data } = useReadContracts({
    contracts: contracts as any,
  });

  useEffect(() => {
    const dataWithId = data?.map((result, index) => {
      const res = result as Result;
      res.id = index;
      return res;
    });
    const filterIds = dataWithId?.filter((result) => {
      return (result.result as any)[2] !== BigInt("0");
    });
    const newPools = filterIds?.map((result) => {
      return pools.filter((pool) => pool.id - 1 === result.id)[0];
    });

    setPoolsData(newPools || []);
  }, [data]);

  return (
    <main>
      <h2 className="text-2xl font-semibold mb-4">Available Fishing Pools</h2>
      <CreatePool />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {poolsData.map((pool) => (
          <PoolDetails pool={pool} key={pool.id} />
        ))}
      </div>
    </main>
  );
}
