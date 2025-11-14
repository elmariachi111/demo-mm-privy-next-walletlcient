import { mainnet, sepolia } from 'viem/chains';
import { http, injected } from 'wagmi';
import { createConfig } from 'wagmi';
import { metaMask, safe, walletConnect } from 'wagmi/connectors';

// Replace these with your app's chains

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    injected(),
    walletConnect({ projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID! }),
    metaMask(),
    safe(),
  ],
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});