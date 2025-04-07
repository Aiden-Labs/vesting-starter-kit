"use client";
import { initWagmiConfig } from "@/lib/wagmi";
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, useMemo } from "react";
import { cookieToInitialState, WagmiProvider } from "wagmi";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

export function Providers({
  cookie,
  children,
}: PropsWithChildren<{ cookie: string | null }>) {
  const wagmiConfig = useMemo(() => initWagmiConfig(), []);

  const initialState = useMemo(
    () => cookieToInitialState(wagmiConfig, cookie),
    [cookie, wagmiConfig]
  );

  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          <>{children}</>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
