import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider as NextThemesProvider, ThemeProvider } from 'next-themes';
import { Provider, chain, defaultChains } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { WalletLinkConnector } from "wagmi/connectors/walletLink";
import { useTheme } from 'next-themes'

const infuraId = process.env.NEXT_PUBLIC_INFURA_ID;

const chains = defaultChains;

type Connector =
  | InjectedConnector
  | WalletConnectConnector
  | WalletLinkConnector;

const connectors = ({ chainId }: { chainId?: number }): Connector[] => {
  const rpcUrl =
    chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
    chain.mainnet.rpcUrls[0];
  return [
    new InjectedConnector({ chains }),
    new WalletConnectConnector({
      options: {
        infuraId,
        qrcode: true,
      },
    }),
    new WalletLinkConnector({
      options: {
        appName: "Anonymous Web Services Shadow Node",
        jsonRpcUrl: `${rpcUrl}/${infuraId}`,
      },
    }),
  ];
};

export default function MyApp({ Component, pageProps }: AppProps) {
  const { theme, setTheme } = useTheme()
  setTheme('dark');
  return (

      <Component  {...pageProps} />
   
  );
}
