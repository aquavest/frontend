import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Pools</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">24</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Investments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$1,234,567</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Investors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1,234</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average ROI</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12.5%</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
