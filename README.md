# Aquavest

## Table of Contents

1. [Description](#description)
2. [Website](#website)
3. [Project Purpose](#project-purpose)
4. [Roadmap](#roadmap)
5. [Demo](#demo)
6. [Prerequisites](#prerequisites)
7. [Installation](#installation)
8. [Running the App](#running-the-app)
9. [Deployment](#deployment)
10. [Contribution Guidelines](#contribution-guidelines)
11. [License](#license)
12. [Stay in Touch](#stay-in-touch)

## Description

AquaVest is a decentralized investment platform designed to provide crypto investors with access to real-world, sustainable ventures like fish farming. Inspired by the struggles of a friend, a fish farmer in my hometown who faced difficulties securing capital, AquaVest opens new opportunities for investors to participate in sectors such as aquaculture.

Through AquaVest’s user-friendly dApp, investors can connect their crypto wallets, select fish farming pools based on detailed fact sheets, and invest using USDC. The platform tokenizes ownership using FISH tokens, which represent a stake in these real-world fish farming assets. As the fish farms generate profits, investors earn returns proportionally to their ownership. This profit-sharing mechanism benefits both the investors and the fish pond owners.

### Who is it for?

AquaVest is designed for:

- **Crypto Investors** seeking opportunities beyond traditional DeFi and digital assets, allowing them to invest in tangible, real-world assets.
- **Sustainable Investment Enthusiasts** interested in eco-friendly ventures, such as aquaculture, that align with their environmental values.
- **Aquaculture Entrepreneurs** looking for decentralized funding options to scale their fish farming operations by connecting with a broad base of crypto investors.

### Problem it Solves

AquaVest addresses two primary challenges:

1. **Limited Access to Real-World Asset Investment**: For most crypto investors, real-world assets like fish farming are typically out of reach due to logistical, legal, and financial barriers. AquaVest removes these obstacles by offering tokenized ownership, making it easier for investors to participate.
2. **Capital Shortages in Aquaculture**: Fish farmers, like my friend, often face challenges in securing funding for growth. AquaVest helps bridge the gap by providing an innovative way to attract investment without relying on traditional finance.

With its blockchain-backed system, AquaVest ensures transparency, security, and liquidity, offering a trustworthy investment platform in the expanding world of decentralized finance (DeFi).

### Why These Changes Work:

1. **Personal Backstory**: Adding a personal story highlights the real-world need for the platform, making the problem more relatable and credible to potential investors.
2. **Target Audience**: By specifying that AquaVest is for crypto investors, sustainable investors, and aquaculture entrepreneurs, you're making it clear who would benefit from the platform.
3. **Problem-Solving Focus**: Explaining the problem (limited access to real-world asset investment and capital shortages) demonstrates why the platform exists and how it uniquely addresses these challenges, which adds value to potential users and contributors.

## Website

[Visit the live platform](https://aquavest.vercel.app/)

## Demo

[Visit the project demo]()

## Project Purpose

AquaVest aims to provide an accessible, secure, and innovative investment channel for participating in real-world ventures like fish farming. By leveraging blockchain technology, the platform offers transparency, security, and liquidity for asset-backed investments.

- The platform disrupts traditional investment models by introducing decentralized, blockchain-backed opportunities in sustainable sectors like fish farming.
- Investors can buy ownership in fishing pools with USDC, tracked via FISH tokens. The platform automates deposits, returns on investment (ROI), and withdrawals through smart contracts, reducing intermediaries and ensuring efficiency.
- The platform includes a secondary market for trading ownership stakes, adding liquidity and flexibility for investors. This creates a unique opportunity to invest in eco-conscious, real-world ventures while utilizing the benefits of decentralized finance (DeFi).

## Roadmap

### **2024: Foundation for Chain Abstraction with Particle Network**
  
- **Smart Contract Deployment on Blockchain**:  
   - **Goal**: Design smart contracts to be compatible with Particle Network’s chain abstraction, even if basic in functionality.
   - **Tasks**:
      - Implement initial cross-chain standards (e.g., ERC-20 for FISH tokens) to facilitate multi-chain compatibility.
      - Prepare contracts for potential rewrites to integrate oracle calls in 2025.
      - Consider wallet connections and cross-chain transaction flows that align with Particle Network’s structure.

- **Platform Launch v0 with Particle Network Basic Integration**:  
   - **Goal**: Launch a minimum viable product (MVP) on a single chain but establish foundational code for multi-chain support.
   - **Tasks**:
      - Integrate Particle Network SDK for wallet connection, enabling users to log in via social platforms and connect wallets across multiple chains.
      - Test basic multi-chain USDC transactions to lay the groundwork for supporting investments from different chains in later versions.
      - Create user interfaces that allow users to select a chain, showing only the current chain’s pools in this version.
   
- **Security Audits with Chain Abstraction in Mind**:  
   - **Goal**: Secure the platform’s MVP with audits focused on multi-chain transactions and compatibility with Particle Network.
   - **Tasks**:
      - Conduct security audits for smart contract vulnerabilities, specifically focusing on wallet interactions and cross-chain payment security.
      - Review Particle Network integration security, focusing on user data protection (e.g., social login) and seamless chain switching.

- **User Dashboard Setup for Multi-Chain**:  
   - **Goal**: Create a dashboard that can eventually accommodate data from multiple chains and wallets.
   - **Tasks**:
      - Design the dashboard layout with multi-chain compatibility in mind, including placeholders for cross-chain asset tracking.
      - Implement simple transaction histories and balances for each chain connected, helping users manage assets across chains in a single view.

---

### **Q1 and Q2 2025: Full Seda Oracle Integration & Smart Contract Upgrades**

- **Smart Contract Rewrite for Oracle Data Feeds**:  
   - **Goal**: Integrate Seda’s oracle data into smart contracts, enabling profit calculations based on real-time metrics from fish farms.
   - **Tasks**:
      - Redesign smart contracts to handle data feeds from Seda, such as yield rates or environmental metrics affecting fish growth.
      - Implement logic that uses Seda’s oracle data to dynamically update profit distributions for investors.
      - Test cross-chain oracle data integration, ensuring compatibility with Particle Network’s chain abstraction.

- **Seda Oracle Integration for Real-Time Farm Metrics**:  
   - **Goal**: Set up Seda oracles to provide real-time data that enhances investment decisions and return calculations.
   - **Tasks**:
      - Integrate Seda’s API to retrieve and verify real-time data on fish farming performance and environmental metrics.
      - Create functions within the smart contracts that update fish pool data based on Seda’s metrics, adjusting investor returns as necessary.
      - Ensure data from Seda can be displayed in AquaVest’s user dashboard, enabling transparency.

- **Platform Launch v1/Mainnet with Full Chain Abstraction & Oracle Integration**:  
   - **Goal**: Deliver a robust mainnet launch that fully integrates chain abstraction and real-world data from oracles.
   - **Tasks**:
      - Launch AquaVest on mainnet with Particle Network’s chain abstraction for cross-chain wallet support and USDC transactions.
      - Ensure cross-chain transactions and Seda data display seamlessly in the user dashboard.
      - Conduct final security audits specifically focusing on multi-chain interactions, oracle data accuracy, and asset security.

---

### **Q3 and Q4 2025: Feature Expansion and User Engagement**

- **Secondary Market Launch with Cross-Chain Support**:  
   - **Goal**: Launch a secondary market for FISH tokens with full cross-chain compatibility, allowing users to trade stakes across different networks.
   - **Tasks**:
      - Integrate Particle Network to enable users to buy and sell FISH tokens across supported chains, increasing market liquidity.
      - Implement features that allow users to view FISH token prices and pool performance metrics (provided by Seda) across chains.
      - Set up cross-chain transaction flow to handle FISH token trades smoothly and securely, ensuring compatibility with both Particle and Seda’s data streams.

- **Platform Launch v2 with Enhanced Multi-Chain and Oracle-Driven Features**:  
   - **Goal**: Launch v2 with optimized multi-chain operations and refined oracle data displays.
   - **Tasks**:
      - Improve the cross-chain experience with Particle Network, refining wallet connections and ensuring users can seamlessly switch between chains.
      - Integrate Seda data to power detailed pool metrics, such as yield history, farm conditions, and expected returns based on real-time data feeds.
      - Conduct usability testing to ensure users can intuitively access cross-chain data and make investment decisions based on Seda-powered insights.

- **Market Data Visualization Enhanced by Seda Oracle Data**:  
   - **Goal**: Use data from Seda to build real-time, interactive market visualizations, giving users actionable insights into fish farming investments.
   - **Tasks**:
      - Design visualization tools that display Seda-sourced metrics like production yields, pond conditions, and historical profit rates for each pool.
      - Ensure compatibility with multi-chain investments, allowing users to compare metrics across chains within one view.
      - Include data filters and comparison features so investors can assess different fish farming pools based on Seda data.

- **Mini-Game App Development with Real-World Data from Seda**:  
   - **Goal**: Develop a mini-game app that uses Seda’s real-time data to provide an educational and engaging experience for users.
   - **Tasks**:
      - Build gameplay scenarios based on real-world metrics like fish growth rates or environmental conditions sourced from Seda.
      - Integrate cross-chain rewards or collectibles within the game using Particle Network, allowing users from any supported chain to participate.
      - Add leaderboard and achievement features to encourage engagement, showcasing players who best understand and optimize fish farming scenarios.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (v20 or later)
- pnpm (v9 or later)

## Installation

To start working on the project, clone the repository and install the dependencies:

```bash
$ git clone https://github.com/aquavest/frontend.git
$ cd frontend
$ pnpm install
```

## Running the App

### Development Mode

Run the app in development mode:

```bash
$ pnpm run dev
```

### Build Mode

Prepare the app for production:

```bash
$ pnpm run build
```

### Production Mode

Run the app in production mode:

```bash
$ pnpm run start
```

### Linting

Ensure code quality and consistency:

```bash
$ pnpm run lint
```

## Deployment

The app is continuously deployed on Vercel. You can access the live version [here](https://aquavest.vercel.app/).

## Contribution Guidelines

We welcome contributions from the community! Please review our [contributing guidelines](CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Stay in Touch

- Author: [Septian Maulana](https://www.tianweb.dev)
