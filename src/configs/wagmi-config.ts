import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  avalanche,
  avalancheFuji,
  mainnet,
  sepolia,
  polygon,
  polygonMumbai,
} from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Vault-App",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "",
  chains: [
    avalanche,
    mainnet,
    polygon,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [avalancheFuji, sepolia, polygonMumbai]
      : []),
  ],
  ssr: true,
});
