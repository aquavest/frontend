import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSignIcon, FishIcon, ClockIcon } from "lucide-react";

// Mock data
const investments = [
  {
    id: 1,
    poolName: "Atlantic Salmon",
    amount: 5000,
    currentROI: "10%",
    fishTokens: 500,
    claimIn: 60,
  },
  {
    id: 2,
    poolName: "Pacific Tuna",
    amount: 7500,
    currentROI: "12%",
    fishTokens: 750,
    claimIn: 30,
  },
];

export default function InvestmentsPage() {
  // TODO: Fetch investments from the blockchain
  return (
    <main>
      <h2 className="text-2xl font-semibold mb-4">Your Investments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {investments.map((investment) => (
          <Card key={investment.id}>
            <CardHeader>
              <CardTitle>{investment.poolName}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-2">
                <DollarSignIcon className="h-5 w-5" />
                <p>Investment: {investment.amount} USDC</p>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <FishIcon className="h-5 w-5" />
                <p>FISH Tokens: {investment.fishTokens}</p>
              </div>
              <p>Current ROI: {investment.currentROI}</p>
              <div className="flex items-center space-x-2 mt-4">
                <ClockIcon className="h-5 w-5" />
                <p>Claim in {investment.claimIn} days</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
