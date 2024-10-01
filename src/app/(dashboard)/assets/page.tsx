import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsMenu } from "@/components/assets/tabs-menu";

export default function AssetsPage() {
  return (
    <main>
      <Card>
        <CardHeader>
          <CardTitle>Token Management</CardTitle>
          <CardDescription>Purchase or return your token</CardDescription>
        </CardHeader>

        <CardContent>
          <TabsMenu />
        </CardContent>
      </Card>
    </main>
  );
}
