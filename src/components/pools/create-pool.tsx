"use client";

import { FormEvent, useState } from "react";
import { useClient, useReadContracts, useWriteContract } from "wagmi";
import { parseUnits } from "viem";
import { waitForTransactionReceipt } from "viem/actions";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { fishTokenContract, investmentPoolsContract } from "@/assets";

export function CreatePool() {
  const [showCreatePool, setShowCreatePool] = useState(false);
  const [maxFishTokens, setMaxFishTokens] = useState("");
  const client = useClient();
  const { writeContractAsync, isPending: isPendingWriteContract } =
    useWriteContract();
  const { data } = useReadContracts({
    contracts: [
      {
        ...fishTokenContract,
        functionName: "decimals",
      },
    ],
  });
  const [fishDecimals] = data || [];

  const handleShowCreatePool = () => setShowCreatePool(true);

  const handleCreatePool = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const createPoolData = await writeContractAsync({
        ...investmentPoolsContract,
        functionName: "createPool",
        args: [parseUnits(maxFishTokens, fishDecimals?.result as number)],
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
      setShowCreatePool(false);
      setMaxFishTokens("");
    }
  };

  return (
    <>
      <Button onClick={handleShowCreatePool} className="mb-6">
        Create a Pool
      </Button>

      <Dialog open={showCreatePool} onOpenChange={setShowCreatePool}>
        <DialogContent aria-describedby="create-pool-description">
          <DialogHeader>
            <DialogTitle>Create a New Pool</DialogTitle>

            <DialogDescription>
              Specify the number of FISH tokens you want to assign to this pool.
            </DialogDescription>
          </DialogHeader>

          <form className="space-y-4" onSubmit={handleCreatePool}>
            <div className="space-y-2">
              <Label htmlFor="maxFishTokens">Max FISH Tokens</Label>
              <Input
                id="maxFishTokens"
                type="number"
                value={maxFishTokens}
                onChange={(e) => setMaxFishTokens(e.target.value)}
              />
            </div>
            <Button disabled={isPendingWriteContract} type="submit">
              Create Pool
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
