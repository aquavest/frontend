"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Fish, Menu, X } from "lucide-react";
import { ModeToggle } from "../shared/mode-toggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Fish className="h-8 w-8" />
            <span className="hidden md:flex text-xl font-bold">AquaVest</span>
          </Link>

          <nav className="hidden md:flex space-x-8"></nav>

          <div className="flex">
            <ModeToggle />
          </div>

          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 px-4 pb-6 bg-primary-foreground">
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:underline">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/docs" className="text-sm hover:underline">
                  Documentation
                </Link>
              </li>

              <li>
                <Link href="/faq" className="text-sm hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>

            <Button variant="default">
              <Button variant="default" className="w-full">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
