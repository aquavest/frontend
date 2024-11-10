import {
  Wallet,
  Fish,
  DollarSign,
  BarChart3,
  CheckCircle2,
  CircleDot,
} from "lucide-react";
import Image from "next/image";
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
          <Image
            src="/images/hero.png"
            alt="Serene aquaculture scene"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
            priority
          />
          <div className="absolute inset-0 bg-opacity-50" />
          <div className="relative z-10 text-center text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Aquaculture meets Blockchain
            </h1>

            <p>Invest in sustainable fishing pools and earn USDC returns.</p>

            <div>
              <Link href="/dashboard">
                <Button size="lg">Start Investing</Button>
              </Link>
            </div>
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

        {/* Development Roadmap */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white dark:text-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Development Roadmap
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>

              {/* Q1 & Q2 2025 */}
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12 hidden md:block"></div>
                <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-20 h-20 rounded-full">
                  <h3 className="mx-auto font-semibold text-sm text-white">
                    Q1 & Q2
                  </h3>
                </div>
                <div className="order-1 bg-white rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold text-blue-600 text-xl">2025</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Smart Contract Deployment on single Blockchain
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Platform Launch v0</span>
                    </li>
                    <li className="flex items-start">
                      <CircleDot className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Chain Abstraction Integration</span>
                    </li>
                    <li className="flex items-start">
                      <CircleDot className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Security Audits</span>
                    </li>
                    <li className="flex items-start">
                      <CircleDot className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>User Dashboard Setup for Multi-Chain</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Q3 & Q4 2025 */}
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12 hidden md:block"></div>
                <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-20 h-20 rounded-full">
                  <h3 className="mx-auto font-semibold text-sm text-white">
                    Q3 & Q4
                  </h3>
                </div>
                <div className="order-1 bg-white rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold text-blue-600 text-xl">2025</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CircleDot className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Smart Contract Rewrite for Oracle Data Feeds</span>
                    </li>
                    <li className="flex items-start">
                      <CircleDot className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Seda Oracle Integration for Real-Time Farm Metrics
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CircleDot className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Platform Launch v1/Mainnet with Full Chain Abstraction &
                        Oracle Integration
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Q1 & Q2 2026 */}
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12 hidden md:block"></div>
                <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-20 h-20 rounded-full">
                  <h3 className="mx-auto font-semibold text-sm text-white">
                    Q1 & Q2
                  </h3>
                </div>
                <div className="order-1 bg-white rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold text-blue-600 text-xl">2026</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CircleDot className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Secondary Market Launch with Cross-Chain Support
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CircleDot className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Platform Launch v2 with Enhanced Multi-Chain and
                        Oracle-Driven Features
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CircleDot className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Market Data Visualization Enhanced by Seda Oracle Data
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CircleDot className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Mini-Game App Development with Real-World Data from Seda
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
