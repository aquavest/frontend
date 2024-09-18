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
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Fish className="h-8 w-8 text-primary-foreground" />
            <span className="hidden md:flex text-xl font-bold text-primary-foreground">
              AquaVest
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8 text-primary-foreground"></nav>

          <div className="flex">
            <ModeToggle />
          </div>

          <button
            className="md:hidden text-primary-foreground"
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
          <nav className="flex flex-col space-y-4 px-4 py-6 bg-secondary">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-secondary-foreground hover:underline"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/docs"
                  className="text-sm text-secondary-foreground hover:underline"
                >
                  Documentation
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className="text-sm text-secondary-foreground hover:underline"
                >
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
