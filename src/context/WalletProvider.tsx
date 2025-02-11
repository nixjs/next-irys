'use client'

import { createAppKit } from '@reown/appkit/react'
import React, { type ReactNode } from 'react'
import { Config, cookieToInitialState, WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { networkMainnet, networkTestnet, wagmiAdapter } from '@pkg/config/wallet'

// Set up metadata
const metadata = {
    name: 'next-reown-appkit',
    description: 'next-reown-appkit',
    url: 'https://github.com/0xonerb/next-reown-appkit-ssr', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/179229932'],
}

// Create the modal
export const modal = createAppKit({
    // adapters: [solanaWeb3JsAdapter],
    adapters: [wagmiAdapter],
    projectId: 'b56e18d47c72ab683b10814fe9495694',
    // networks: [solana, solanaTestnet, solanaDevnet],
    networks: [...networkTestnet, ...networkMainnet] as any,
    metadata,
    themeMode: 'dark',
    features: {
        analytics: true,
        email: false,
        socials: false,
        collapseWallets: false,
    },
    themeVariables: {
        '--w3m-accent': '#ffffff',
    },
    showWallets: true,
    allWallets: 'SHOW',
    includeWalletIds: [
        // '1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79',
        // 'a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393',
        // '3fecad5e2f0a30aba97edea69ebf015884a9b8a9aec93e66d4b4b695fee1f010',
        'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
        '971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709',
        '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
        '7674bb4e353bf52886768a3ddc2a4562ce2f4191c80831291218ebd90f5f5e26',
        '971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709',
    ],
})

function WalletProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
    const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)
    const [queryClient] = React.useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        // With SSR, we usually want to set some default staleTime
                        // above 0 to avoid refetching immediately on the client
                        staleTime: 60 * 1000,
                    },
                },
            })
    )
    return (
        <WagmiProvider config={wagmiAdapter.wagmiConfig} initialState={initialState}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    )
}

export default WalletProvider
