import { ConnectButton } from "@rainbow-me/rainbowkit";

import { ModeToggle } from "@/components/shared/mode-toggle";
import Link from "next/link";
import { Fish } from "lucide-react";

export function Header() {
  return (
    <header className="bg-primary-foreground shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Fish className="h-8 w-8" />
          <span className="hidden md:flex text-xl font-bold">AquaVest</span>
        </Link>

        <div className="flex space-x-5">
          <ConnectButton
            accountStatus={{
              smallScreen: "avatar",
              largeScreen: "full",
            }}
            chainStatus="icon"
            showBalance={true}
          />

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
