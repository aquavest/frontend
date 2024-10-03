# Aquavest

## Table of Contents

1. [Description](#description)
2. [Website](#website)
3. [Project Purpose](#project-purpose)
4. [Roadmap](#roadmap)
5. [Prerequisites](#prerequisites)
6. [Installation](#installation)
7. [Running the App](#running-the-app)
8. [Deployment](#deployment)
9. [Contribution Guidelines](#contribution-guidelines)
10. [License](#license)
11. [Stay in Touch](#stay-in-touch)

## Description

AquaVest is a decentralized investment platform designed to provide crypto investors with access to real-world, sustainable ventures like fish farming. It offers a seamless experience for users looking to diversify their investment portfolios through tokenized ownership in fish farming pools.

Through AquaVest’s user-friendly dApp, investors can easily connect their crypto wallets, select fish farming pools based on comprehensive fact sheets, and invest using USDC. The platform tokenizes ownership using FISH tokens, which represent a stake in these real-world fish farming assets. As the fish farms generate profits, investors earn returns proportionally to their ownership.

### Who is it for?

AquaVest is designed for:

- **Crypto Investors** seeking opportunities beyond traditional DeFi and digital assets, allowing them to invest in tangible, real-world assets.
- **Sustainable Investment Enthusiasts** interested in eco-friendly ventures, such as aquaculture, that align with their environmental values.
- **Aquaculture Entrepreneurs** looking for decentralized funding options to scale their fish farming operations by connecting with a broad base of crypto investors.

### Problem it Solves

AquaVest addresses two primary challenges:

1. **Limited Access to Real-World Asset Investment**: For most crypto investors, real-world assets like fish farming are typically out of reach due to logistical, legal, and financial barriers. AquaVest removes these obstacles by offering tokenized ownership, making it easier for investors to participate.
2. **Capital Shortages in Aquaculture**: Fish farmers and aquaculture entrepreneurs often face challenges in securing funding for growth. AquaVest helps bridge the gap by providing an innovative way to attract investment without relying on traditional finance.

With its blockchain-backed system, AquaVest ensures transparency, security, and liquidity, offering a trustworthy investment platform in the expanding world of decentralized finance (DeFi).

### Why These Changes Work:

1. **Target Audience**: By specifying that AquaVest is for crypto investors, sustainable investors, and aquaculture entrepreneurs, you're making it clear who would benefit from the platform.
2. **Problem-Solving Focus**: Explaining the problem (limited access to real-world asset investment and capital shortages) demonstrates why the platform exists and how it uniquely addresses these challenges, which adds value to potential users and contributors.

## Website

[Visit the live platform](https://aquavest.vercel.app/)

## Project Purpose

AquaVest aims to provide an accessible, secure, and innovative investment channel for participating in real-world ventures like fish farming. By leveraging blockchain technology, the platform offers transparency, security, and liquidity for asset-backed investments.

- The platform disrupts traditional investment models by introducing decentralized, blockchain-backed opportunities in sustainable sectors like fish farming.
- Investors can buy ownership in fishing pools with USDC, tracked via FISH tokens. The platform automates deposits, returns on investment (ROI), and withdrawals through smart contracts, reducing intermediaries and ensuring efficiency.
- The platform includes a secondary market for trading ownership stakes, adding liquidity and flexibility for investors. This creates a unique opportunity to invest in eco-conscious, real-world ventures while utilizing the benefits of decentralized finance (DeFi).

## Roadmap

### Phase 1: Core Infrastructure and Platform Launch

- **Smart Contract Deployment on Neo X:** Deploy foundational smart contracts for fish farming pool investments, ownership tracking, and profit sharing.
- **Platform Launch:** Release the initial platform, allowing users to connect wallets, invest in tokenized fish farming pools, and track ownership through FISH tokens.
  - **Security Audits:** Conduct thorough audits to ensure the safety of investor funds.
  - **User Dashboard:** Develop an intuitive dashboard for investors to monitor real-time pool performance, balances, and returns.

### Phase 2: Data Connectivity and Blockchain Intelligence

- **The Graph Integration:** Implement The Graph to enable efficient blockchain data querying and indexing, providing real-time data on pool performance, transactions, and history.
- **Oracle Integration:** Integrate oracles to sync blockchain-based contracts with real-world data, including farm metrics, market prices, and environmental factors, ensuring accurate on-chain reflections.

### Phase 3: Expansion and Engagement

- **Secondary Market Launch:** Build a decentralized marketplace for trading FISH token-based ownership stakes, enhancing investor liquidity and flexibility.
  - **Market Data Visualization:** Implement market price tracking and trend analysis tools to support informed investment and trading decisions.
- **Mini-Game App Development:** Create a gamified mini-app to simulate fish farming or investment decision-making, engaging users and educating them about aquaculture in a fun, interactive way.

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
