import { InjectedConnector } from "@wagmi/core";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { createClient, configureChains, chain } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [chain.goerli],
  [
    alchemyProvider({ apiKey: "eeP8pM8l8KFmBS3OJZcJP3S8JbtiHVM1" }),
    publicProvider(),
  ]
);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors: [
    new InjectedConnector({ chains }),
    // new MetaMaskConnector({ chains, options: { shimDisconnect: true } }),
  ],
  provider,
});
