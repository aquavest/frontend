"use client";

import { useState } from "react";
import { useClient, useReadContracts, useWriteContract } from "wagmi";
import { waitForTransactionReceipt } from "viem/actions";

import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  fishTokenContract,
  investmentPoolsContract,
  usdcTokenContract,
} from "@/assets";
import { formatUnits, parseUnits } from "viem";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface Pool {
  id: number;
  name: string;
  targetHarvest: string;
  location: string;
  expectedROI: string;
  daysRemaining: number;
}

interface PoolDetailsProps {
  pool: Pool;
}

type PoolResult = [bigint, bigint, bigint];

export function PoolDetails({ pool }: PoolDetailsProps) {
  const [selectedPool, setSelectedPool] = useState<Pool | undefined>(undefined);
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [isRiskAcknowledged, setIsRiskAcknowledged] = useState<boolean>(false);
  const client = useClient();
  const { writeContractAsync, isPending: isPendingWriteContract } =
    useWriteContract();
  const { data, refetch } = useReadContracts({
    contracts: [
      {
        ...investmentPoolsContract,
        functionName: "pools",
        args: [BigInt((selectedPool?.id || 1) - 1)],
      },
      {
        ...fishTokenContract,
        functionName: "decimals",
      },
      {
        ...usdcTokenContract,
        functionName: "decimals",
      },
    ],
  });
  const [pools, fishDecimals, usdcDecimals] = data || [];
  const result = pools?.result as PoolResult | undefined;

  const handleCheckedChange = (value: boolean) => {
    if (value === null) {
      console.log("Checkbox is indeterminate");
    } else {
      setIsRiskAcknowledged(value);
    }
  };

  const handleInvest = async () => {
    try {
      const approveData = await writeContractAsync({
        ...fishTokenContract,
        functionName: "approve",
        args: [
          investmentPoolsContract.address,
          parseUnits(investmentAmount, fishDecimals?.result as number),
        ],
      });

      const approveTransactionReceipt = await waitForTransactionReceipt(
        client!,
        {
          hash: approveData,
        },
      );

      alert(
        `Tokens approved tx hash: ${approveTransactionReceipt.transactionHash}`,
      );

      const createPoolData = await writeContractAsync({
        ...investmentPoolsContract,
        functionName: "userDeposit",
        args: [
          BigInt((selectedPool?.id || 1) - 1),
          parseUnits(investmentAmount, fishDecimals?.result as number),
        ],
      });

      const createPoolDataTransactionReceipt = await waitForTransactionReceipt(
        client!,
        {
          hash: createPoolData,
        },
      );

      alert(
        `Pool created successfully! Transaction hash: ${createPoolDataTransactionReceipt.transactionHash}`,
      );
    } catch (error: any) {
      alert(error.message);
    } finally {
      refetch();
      setSelectedPool(undefined);
      setInvestmentAmount("");
      setIsRiskAcknowledged(false);
    }
  };

  return (
    <Card key={pool.id}>
      <CardHeader>
        <CardTitle>{pool.name}</CardTitle>
      </CardHeader>

      <CardContent>
        <p>Target Harvest: {pool.targetHarvest}</p>
        <p>Location: {pool.location}</p>
        <p>Expected ROI: {pool.expectedROI}</p>
        <p className="mb-4">
          Open for deposits: {pool.daysRemaining} days remaining
        </p>

        <Dialog>
          <DialogTrigger asChild>
            <Button onClick={() => setSelectedPool(pool)}>
              View Pool Details
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{pool.name} - Pool Details</DialogTitle>

              <DialogDescription>
                Please review the details below before making an investment.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <p>Target Harvest: {pool.targetHarvest}</p>
              <p>Location: {pool.location}</p>
              <p>Expected ROI: {pool.expectedROI}</p>
              <p>Risk Factors: Market volatility, environmental conditions</p>
              <p>Farmer Background: 10+ years in aquaculture</p>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Investment Summary</h3>
                <p>
                  FISH Token Goal:{" "}
                  {formatUnits(
                    (result?.[2] as bigint) || BigInt(0),
                    fishDecimals?.result as number,
                  )}
                </p>
                <p>
                  Investment Amount (USDC):{" "}
                  {formatUnits(
                    (result?.[1] as bigint) || BigInt(0),
                    usdcDecimals?.result as number,
                  )}
                </p>
                <p>
                  Ownership Allocation (FISH):{" "}
                  {formatUnits(
                    (result?.[0] as bigint) || BigInt(0),
                    fishDecimals?.result as number,
                  )}
                </p>

                <div className="space-y-2">
                  <Label htmlFor="investmentAmount">
                    Investment Amount (FISH)
                  </Label>
                  <Input
                    id="investmentAmount"
                    type="number"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="riskAcknowledgement"
                  checked={isRiskAcknowledged}
                  onCheckedChange={handleCheckedChange}
                />

                <label
                  htmlFor="riskAcknowledgement"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I acknowledge the risks associated with this investment
                </label>
              </div>
            </div>

            <Button
              onClick={handleInvest}
              disabled={
                !isRiskAcknowledged ||
                !investmentAmount ||
                isPendingWriteContract
              }
            >
              Invest Now
            </Button>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
