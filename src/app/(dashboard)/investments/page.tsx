"use client";

import { useAccount, useReadContract, useWriteContract } from "wagmi";
import usdcAbi from "../../../lib/usdc.json";
import { useEffect, useState } from "react";
import poolAbi from "../../../lib/pool.json";

type PoolData = [bigint, bigint, bigint]; // Adjust types as needed

export default function InvestmentsPage() {
  const { address } = useAccount();
  const [balance, setBalance] = useState("");
  const [fishBalance, setFishBalance] = useState("");
  const [poolData, setPoolData] = useState({
    fishBalance: "0",
    usdcBalance: "0",
    maxFishTokens: "0",
  });
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");

  const [usdcAmount, setUsdcAmount] = useState("");
  const { data: hash, error, isPending, writeContract } = useWriteContract();
  const {
    data: hash2,
    error: error2,
    isPending: isPending2,
    writeContract: writeContract2,
  } = useWriteContract();

  const result = useReadContract({
    abi: usdcAbi,
    address: "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8",
    functionName: "balanceOf",
    args: [address],
  });

  useEffect(() => {
    if (result.data) {
      setBalance(result.data.toString());
    }
  }, [result]);

  const fish = useReadContract({
    abi: usdcAbi,
    address: "0x62647c6e0411a77bf32fcF79D58cefcFE1450b85",
    functionName: "balanceOf",
    args: [address],
  });

  useEffect(() => {
    if (fish.data) {
      setFishBalance(fish.data.toString());
    }
  }, [result]);

  const pool = useReadContract({
    abi: poolAbi,
    address: "0x2cf8E3043Ce1127eFb57b752a4038f7735FF3b45",
    functionName: "pools",
    args: ["0"],
  }) as { data: PoolData | undefined };

  useEffect(() => {
    if (pool.data) {
      setPoolData({
        fishBalance: pool.data[0].toString(),
        usdcBalance: pool.data[1].toString(),
        maxFishTokens: pool.data[2].toString(),
      });
    }
  }, [pool.data]);

  const handleApprove = async () => {
    try {
      writeContract({
        address: "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8",
        abi: usdcAbi,
        functionName: "approve",
        args: ["0x2cf8E3043Ce1127eFb57b752a4038f7735FF3b45", balance],
      });
    } catch (err) {
      console.error("Error approving USDC:", err);
    }
  };

  const handleApproveFish = async () => {
    try {
      writeContract({
        address: "0x62647c6e0411a77bf32fcF79D58cefcFE1450b85",
        abi: usdcAbi,
        functionName: "approve",
        args: ["0x2cf8E3043Ce1127eFb57b752a4038f7735FF3b45", balance],
      });
    } catch (err) {
      console.error("Error approving USDC:", err);
    }
  };

  const handlePurchaseTokens = async () => {
    if (!usdcAmount) {
      alert("Please enter an amount of USDC to spend");
      return;
    }
    try {
      writeContract({
        address: "0x2cf8E3043Ce1127eFb57b752a4038f7735FF3b45",
        abi: poolAbi,
        functionName: "purchaseTokens",
        args: [usdcAmount],
      });
    } catch (err) {
      console.error("Error purchasing tokens:", err);
    }
  };

  const handleDeposit = async () => {
    if (!depositAmount) {
      alert("Please enter an amount to deposit");
      return;
    }
    try {
      writeContract({
        address: "0x2cf8E3043Ce1127eFb57b752a4038f7735FF3b45",
        abi: poolAbi,
        functionName: "userDeposit",
        args: ["0", depositAmount], // Assuming pool ID is 0
      });
    } catch (err) {
      console.error("Error depositing tokens:", err);
    }
  };

  const handleWithdraw = async () => {
    if (!withdrawAmount) {
      alert("Please enter an amount to withdraw");
      return;
    }
    try {
      writeContract({
        address: "0x2cf8E3043Ce1127eFb57b752a4038f7735FF3b45",
        abi: poolAbi,
        functionName: "userWithdraw",
        args: ["0", withdrawAmount], // Assuming pool ID is 0
      });
    } catch (err) {
      console.error("Error withdrawing tokens:", err);
    }
  };

  return (
    <div>
      <div>
        <h1>My Profile</h1>
        <h1>{address}</h1>
        <br />
        <h1>USDC</h1>
        <h1>Token Balance</h1>
        <h1>{balance}</h1>
        <button onClick={handleApprove}>Approve USDC</button>
        <br />
        <br />
        <h1>FISH</h1>
        <input
          type="number"
          value={usdcAmount}
          onChange={(e) => setUsdcAmount(e.target.value)}
          placeholder="Enter amount of USDC to spend"
        />
        <button onClick={handlePurchaseTokens}>Purchase Tokens</button>
        <h1>Token Balance</h1>
        <h1>{fishBalance}</h1>
        <button onClick={handleApproveFish}>Approve Fish</button>
      </div>
      <br />

      <div>
        <h1>Pool Data</h1>
        <p>Fish Balance: {poolData.fishBalance}</p>
        <p>USDC Balance: {poolData.usdcBalance}</p>
        <p>Max Fish Tokens: {poolData.maxFishTokens}</p>
        <br />

        <div>
          <h2>Deposit Fish Tokens</h2>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            placeholder="Enter amount of Fish to deposit"
          />
          <button onClick={handleDeposit}>Deposit</button>
        </div>

        <div>
          <h2>Withdraw Fish Tokens</h2>
          <input
            type="number"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            placeholder="Enter amount of Fish to withdraw"
          />
          <button onClick={handleWithdraw}>Withdraw</button>
        </div>
      </div>
    </div>
  );
}

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { DollarSignIcon, FishIcon, ClockIcon } from "lucide-react";

// Mock data
// const investments = [
//   {
//     id: 1,
//     poolName: "Atlantic Salmon",
//     amount: 5000,
//     currentROI: "10%",
//     fishTokens: 500,
//     claimIn: 60,
//   },
//   {
//     id: 2,
//     poolName: "Pacific Tuna",
//     amount: 7500,
//     currentROI: "12%",
//     fishTokens: 750,
//     claimIn: 30,
//   },
// ];

// <>
//   <h2 className="text-2xl font-semibold mb-4">Your Investments</h2>
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//     {investments.map((investment) => (
//       <Card key={investment.id}>
//         <CardHeader>
//           <CardTitle>{investment.poolName}</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="flex items-center space-x-2 mb-2">
//             <DollarSignIcon className="h-5 w-5" />
//             <p>Investment: {investment.amount} USDC</p>
//           </div>
//           <div className="flex items-center space-x-2 mb-2">
//             <FishIcon className="h-5 w-5" />
//             <p>FISH Tokens: {investment.fishTokens}</p>
//           </div>
//           <p>Current ROI: {investment.currentROI}</p>
//           <div className="flex items-center space-x-2 mt-4">
//             <ClockIcon className="h-5 w-5" />
//             <p>Claim in {investment.claimIn} days</p>
//           </div>
//         </CardContent>
//       </Card>
//     ))}
//   </div>
// </>
