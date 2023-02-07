'use client';
// Imports
// ========================================================
import React from 'react';
import { getDefaultProvider } from 'ethers';

// Config
// ========================================================

// Provider
// ========================================================

// Import the Wallet Providers && Wallets
import {
  RainbowKitProvider,
  connectorsForWallets,
  Wallet,
} from '@rainbow-me/rainbowkit';
import {
  injectedWallet,
  rainbowWallet,
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';

// import the providers for wagmi ethdata
import { WagmiConfig, createClient, configureChains } from 'wagmi';
import { mainnet, polygon, optimism } from '@wagmi/core/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

// Connect Magiclink (Email <> Web3) connector for web2 experience in web3
import { rainbowMagicConnector } from '#/ui/W3Wrapper/rainbowUtils';

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, polygon, optimism],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID || '' }),
    publicProvider(),
  ],
);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      // ... other wallets connectors
      injectedWallet({ chains }),
      rainbowWallet({ chains }),
      metaMaskWallet({ chains }),
      coinbaseWallet({ chains, appName: 'free.army' }),
      walletConnectWallet({ chains }),
      // rainbowMagicConnector({ chains }),
    ],
  },
]);

const customConnectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [rainbowMagicConnector({ chains }) as unknown as Wallet],
  },
]);

const client = createClient({
  autoConnect: true,
  connectors: () => {
    return [...customConnectors(), ...connectors()];
  },
  provider: getDefaultProvider(),
  // connectors,
  webSocketProvider,
});

const WagmiProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider coolMode chains={chains}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

// Exports
// ========================================================
export default WagmiProvider;
