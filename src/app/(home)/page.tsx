import { Wallet, Fish, DollarSign, BarChart3 } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/home/feature-card";
import { StepCard } from "@/components/home/step-card";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center">
          {/* <Image
            src=""
            alt="Serene aquaculture scene"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          /> */}
          <div className="absolute inset-0 bg-black dark:bg-white bg-opacity-50" />
          <div className="relative z-10 text-center text-primary-foreground space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Aquaculture meets Blockchain
            </h1>

            <p>Invest in sustainable fishing pools and earn USDC returns.</p>

            <Button size="lg">
              <Link href="/dashboard">Start Investing</Link>
            </Button>
          </div>
        </section>

        {/* Key Features Overview */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Key Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Fish className="h-12 w-12" />}
                title="Invest in Fishing Pools"
                description="Select from fact sheet-based fishing pool investments"
              />

              <FeatureCard
                icon={<DollarSign className="h-12 w-12" />}
                title="Earn Profits with USDC Returns"
                description="Receive returns in stable USDC cryptocurrency"
              />

              <FeatureCard
                icon={<BarChart3 className="h-12 w-12" />}
                title="Trade Ownership on Secondary Market"
                description="Easily trade your pool ownership stakes"
              />

              <FeatureCard
                icon={<Wallet className="h-12 w-12" />}
                title="Blockchain Security & Transparency"
                description="Benefit from the security and transparency of blockchain technology"
              />
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              How it Works
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
              <StepCard
                number={1}
                title="Connect Wallet"
                icon={<Wallet className="h-16 w-16" />}
              />

              <StepCard
                number={2}
                title="Choose a Pool"
                icon={<Fish className="h-16 w-16" />}
              />

              <StepCard
                number={3}
                title="Earn Returns"
                icon={<DollarSign className="h-16 w-16" />}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
