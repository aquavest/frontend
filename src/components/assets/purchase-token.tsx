"use client";

import { ChangeEvent, useState } from "react";
import {
  useAccount,
  useClient,
  useReadContracts,
  useWriteContract,
} from "wagmi";
import { formatUnits, parseUnits, type BaseError } from "viem";
import { waitForTransactionReceipt } from "viem/actions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  fishTokenContract,
  investmentPoolsContract,
  usdcTokenContract,
} from "@/assets";

export function PurchaseTokens() {
  const [amount, setAmount] = useState("");
  const { address } = useAccount();
  const client = useClient();
  const { writeContractAsync, isPending: isPendingWriteContract } =
    useWriteContract();
  const { data, error, isPending, refetch } = useReadContracts({
    contracts: [
      {
        ...fishTokenContract,
        functionName: "balanceOf",
        args: [address],
      },
      {
        ...fishTokenContract,
        functionName: "decimals",
      },
      {
        ...fishTokenContract,
        functionName: "symbol",
      },
      {
        ...usdcTokenContract,
        functionName: "balanceOf",
        args: [address],
      },
      {
        ...usdcTokenContract,
        functionName: "decimals",
      },
      {
        ...usdcTokenContract,
        functionName: "symbol",
      },
    ],
  });
  const [
    fishBalance,
    fishDecimals,
    fishSymbol,
    usdcBalance,
    usdcDecimals,
    usdcSymbol,
  ] = data || [];

  const changeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const approveAndBuyTokens = async () => {
    try {
      const approveData = await writeContractAsync({
        ...usdcTokenContract,
        functionName: "approve",
        args: [
          investmentPoolsContract.address,
          parseUnits(amount, usdcDecimals?.result as number),
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

      const buyData = await writeContractAsync({
        ...investmentPoolsContract,
        functionName: "purchaseTokens",
        args: [parseUnits(amount, usdcDecimals?.result as number)],
      });

      const buyTransactionReceipt = await waitForTransactionReceipt(client!, {
        hash: buyData,
      });

      alert(
        `Tokens purchased tx hash: ${buyTransactionReceipt.transactionHash}`,
      );
    } catch (error: any) {
      alert(error.message);
    } finally {
      refetch();
      setAmount("");
    }
  };

  if (isPending) return <p>Loading...</p>;

  if (error)
    return <p>Error: {(error as BaseError).shortMessage || error.message}</p>;

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <span>Balances:</span>
        <span className="font-bold">{`${formatUnits(
          (usdcBalance?.result as bigint) || BigInt(0),
          usdcDecimals?.result as number,
        )} ${usdcSymbol?.result || "USDC"}`}</span>
      </div>

      <div className="flex items-center justify-between">
        <span></span>
        <span className="font-bold">{`${formatUnits(
          (fishBalance?.result as bigint) || BigInt(0),
          fishDecimals?.result as number,
        )} ${fishSymbol?.result || "FISH"}`}</span>
      </div>

      <div className="mt-4 space-y-4">
        <Input
          type="number"
          name="amount"
          placeholder="Amount to buy with USDC"
          onChange={changeAmount}
          value={amount}
        />

        <Button
          className="w-full"
          disabled={isPendingWriteContract}
          onClick={approveAndBuyTokens}
        >
          Buy Tokens
        </Button>
      </div>
    </div>
  );
}
