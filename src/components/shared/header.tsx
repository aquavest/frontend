import { ConnectButton } from "@rainbow-me/rainbowkit";

import { ModeToggle } from "@/components/shared/mode-toggle";
import Link from "next/link";
import { Fish } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Fish className="h-8 w-8 text-primary-foreground" />
            <span className="hidden md:flex text-xl font-bold text-primary-foreground">
              AquaVest
            </span>
          </Link>

          <div className="flex">
            <ConnectButton
              accountStatus={{
                smallScreen: "avatar",
                largeScreen: "full",
              }}
              chainStatus="icon"
              showBalance={true}
            />
          </div>

          <div className="flex">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
