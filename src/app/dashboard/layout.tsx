import { Web3ModalProvider } from "@/contexts/web3-modal-provider";
import { Header } from "@/components/shared/header";

export default function CoreLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Web3ModalProvider>
      <Header />
      {children}
    </Web3ModalProvider>
  );
}
