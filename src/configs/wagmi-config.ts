import { getDefaultConfig } from "@rainbow-me/rainbowkit";

import { avalancheFuji } from "viem/chains";

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) {
  throw new Error("Project ID is not defined");
}

export const config = getDefaultConfig({
  appName: "Aquavest",
  projectId,
  chains: [avalancheFuji],
  ssr: true,
});
