// wagmiConfig.js
import { configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { createConfig } from 'wagmi';

// Chain Configuration (Step 2)
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

// Creating a Configuration Instance (Step 3)
const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

export default config;