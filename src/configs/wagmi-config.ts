import { getDefaultConfig } from "@rainbow-me/rainbowkit";

import { neoXT4 } from "./neox.chain";

export const config = getDefaultConfig({
  appName: "Vault-App",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "",
  chains: [neoXT4],
  ssr: true,
});
