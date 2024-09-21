"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface Pool {
  id: number;
  name: string;
  targetHarvest: string;
  location: string;
  expectedROI: string;
  daysRemaining: number;
}

// Mock data
const pools = [
  {
    id: 1,
    name: "Atlantic Salmon",
    targetHarvest: "10,000 kg",
    location: "Norway",
    expectedROI: "12%",
    daysRemaining: 10,
  },
  {
    id: 2,
    name: "Pacific Tuna",
    targetHarvest: "15,000 kg",
    location: "Japan",
    expectedROI: "15%",
    daysRemaining: 5,
  },
  {
    id: 3,
    name: "Mediterranean Sea Bass",
    targetHarvest: "8,000 kg",
    location: "Greece",
    expectedROI: "10%",
    daysRemaining: 15,
  },
];

export default function PoolsPage() {
  const [selectedPool, setSelectedPool] = useState<Pool | undefined>(undefined);
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [isRiskAcknowledged, setIsRiskAcknowledged] = useState<boolean>(false);

  const handleCheckedChange = (value: boolean) => {
    if (value === null) {
      console.log("Checkbox is indeterminate");
    } else {
      setIsRiskAcknowledged(value);
    }
  };

  const handleInvest = () => {
    // Implement investment logic here
    console.log(`Investing ${investmentAmount} USDC in ${selectedPool?.name}`);
    setSelectedPool(undefined);
    setInvestmentAmount("");
    setIsRiskAcknowledged(false);
  };

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Available Fishing Pools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pools.map((pool) => (
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
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>{pool.name} - Investment Details</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <p>Target Harvest: {pool.targetHarvest}</p>
                    <p>Location: {pool.location}</p>
                    <p>Expected ROI: {pool.expectedROI}</p>
                    <p>
                      Risk Factors: Market volatility, environmental conditions
                    </p>
                    <p>Farmer Background: 10+ years in aquaculture</p>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="investmentAmount" className="text-right">
                        Amount (USDC)
                      </Label>
                      <Input
                        id="investmentAmount"
                        value={investmentAmount}
                        onChange={(e) => setInvestmentAmount(e.target.value)}
                        className="col-span-3"
                      />
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
                    disabled={!isRiskAcknowledged || !investmentAmount}
                  >
                    Invest Now
                  </Button>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
