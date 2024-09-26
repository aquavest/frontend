import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { PurchaseTokens } from "./purchase-token";
import { ReturnTokens } from "./return-token";

export function TabsMenu() {
  return (
    <Tabs defaultValue="purchase" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="purchase">Purchase</TabsTrigger>
        <TabsTrigger value="return">Return</TabsTrigger>
      </TabsList>

      <TabsContent value="purchase">
        <PurchaseTokens />
      </TabsContent>

      <TabsContent value="return">
        <ReturnTokens />
      </TabsContent>
    </Tabs>
  );
}
