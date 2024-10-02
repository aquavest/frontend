import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreatePool } from "@/components/pools/create-pool";
import { PoolDetails } from "@/components/pools/pool-details";

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
  {
    id: 4,
    name: "Indian Ocean Prawns",
    targetHarvest: "12,000 kg",
    location: "India",
    expectedROI: "13%",
    daysRemaining: 8,
  },
  {
    id: 5,
    name: "Caribbean Lobsters",
    targetHarvest: "5,000 kg",
    location: "Bahamas",
    expectedROI: "18%",
    daysRemaining: 7,
  },
  {
    id: 6,
    name: "Alaskan King Crab",
    targetHarvest: "6,500 kg",
    location: "Alaska",
    expectedROI: "20%",
    daysRemaining: 12,
  },
];

export default function PoolsPage() {
  return (
    <main>
      <h2 className="text-2xl font-semibold mb-4">Available Fishing Pools</h2>
      <CreatePool />

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

              <PoolDetails pool={pool} />
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
