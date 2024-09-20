import { Web3ModalProvider } from "@/contexts/web3-modal-provider";
import { Header } from "@/components/dashboard/header";
import { Sidebar } from "@/components/dashboard/sidebar";

export default function CoreLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Web3ModalProvider>
      <div className="flex flex-col h-screen bg-gray-100">
        {/* Header */}
        <Header />
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-1 overflow-auto">
            <div className="container mx-auto p-6">{children}</div>
          </div>
        </div>
      </div>
    </Web3ModalProvider>
  );
}
