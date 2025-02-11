// import type { AppKitNetwork } from '@reown/appkit/networks'
import { cookieStorage, createStorage } from 'wagmi'
import {
    sepolia,
    mainnet,
    opBNB,
    opBNBTestnet,
    optimismSepolia,
    optimism,
    arbitrum,
    arbitrumSepolia,
    polygon,
    polygonMumbai,
    avalancheFuji,
    avalanche,
    scroll,
    scrollSepolia,
} from '@reown/appkit/networks'
// import { SolanaAdapter } from '@reown/appkit-adapter-solana/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

// import {
//     PhantomWalletAdapter,
//     SolflareWalletAdapter,
//     TorusWalletAdapter
// } from '@solana/wallet-adapter-wallets'
import { http } from 'wagmi'

// Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || 'b56e18d47c72ab683b10814fe9495694' // this is a public projectId only to use on localhost

if (!projectId) {
    throw new Error('Project ID is not defined')
}

// ============== Solana
// export const networks = [solana, solanaTestnet, solanaDevnet] as [
//     AppKitNetwork,
//     ...AppKitNetwork[]
// ]

export const networkMainnet = [
    mainnet,
    arbitrum,
    opBNB,
    // optimism,
    polygon,
    avalanche,
]
export const networkTestnet = [
    sepolia,
    arbitrumSepolia,
    opBNBTestnet,
    // optimismSepolia,
    polygonMumbai,
    avalancheFuji,
]

// export const phantomAdapter = new PhantomWalletAdapter()
// export const solflareAdapter = new SolflareWalletAdapter()
// export const torusAdapter = new TorusWalletAdapter()
// // Set up Solana Adapter
// export const solanaWeb3JsAdapter = new SolanaAdapter({
//     wallets: [phantomAdapter, solflareAdapter, torusAdapter]
// })

// ============== Evm
export const wagmiAdapter = new WagmiAdapter({
    projectId,
    networks: [...networkTestnet, ...networkMainnet],
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
        [opBNB.id]: http(),
        [opBNBTestnet.id]: http(),
        // [optimismSepolia.id]: http(),
        // [optimism.id]: http(),
        [arbitrumSepolia.id]: http(),
        [arbitrum.id]: http(),
        [polygonMumbai.id]: http(),
        [polygon.id]: http(),
        [avalancheFuji.id]: http(),
        [avalanche.id]: http(),
    },
    storage: createStorage({
        storage: cookieStorage,
    }),
    ssr: true,
})

export const ChainById = {
    [mainnet.id]: mainnet,
    [sepolia.id]: sepolia,
    [opBNB.id]: opBNB,
    [opBNBTestnet.id]: opBNBTestnet,
    [optimismSepolia.id]: optimismSepolia,
    [optimism.id]: optimism,
    [arbitrumSepolia.id]: arbitrumSepolia,
    [arbitrum.id]: arbitrum,
    [polygonMumbai.id]: polygonMumbai,
    [polygon.id]: polygon,
    [avalancheFuji.id]: avalancheFuji,
    [avalanche.id]: avalanche,
}

export const TransportByChainId = {
    [mainnet.id]: http('https://mainnet.infura.io/v3/b4e73466a36941e9806a35a7dbdd3f3d'),
    [sepolia.id]: http('https://sepolia.infura.io/v3/b4e73466a36941e9806a35a7dbdd3f3d'),
    [opBNB.id]: http('https://opbnb-mainnet.infura.io/v3/b4e73466a36941e9806a35a7dbdd3f3d'),
    [opBNBTestnet.id]: http('https://opbnb-testnet.infura.io/v3/b4e73466a36941e9806a35a7dbdd3f3d'),
    [optimismSepolia.id]: http('https://optimism-sepolia.infura.io/v3/b4e73466a36941e9806a35a7dbdd3f3d'),
    [optimism.id]: http('https://optimism-mainnet.infura.io/v3/b4e73466a36941e9806a35a7dbdd3f3d'),
    [arbitrumSepolia.id]: http('https://arbitrum-sepolia.infura.io/v3/b4e73466a36941e9806a35a7dbdd3f3d'),
    [arbitrum.id]: http('https://arbitrum-mainnet.infura.io/v3/b4e73466a36941e9806a35a7dbdd3f3d'),
    [polygonMumbai.id]: http('https://polygon-amoy.infura.io/v3/b4e73466a36941e9806a35a7dbdd3f3d'),
    [polygon.id]: http('https://polygon-mainnet.infura.io/v3/b4e73466a36941e9806a35a7dbdd3f3d'),
    [avalancheFuji.id]: http('https://avalanche-fuji.infura.io/v3/b4e73466a36941e9806a35a7dbdd3f3d'),
    [avalanche.id]: http('https://avalanche-mainnet.infura.io/v3/b4e73466a36941e9806a35a7dbdd3f3d'),
    [scrollSepolia.id]: http('https://scroll-sepolia.infura.io/v3/b4e73466a36941e9806a35a7dbdd3f3d'),
    [scroll.id]: http('https://scroll-mainnet.infura.io/v3/b4e73466a36941e9806a35a7dbdd3f3d'),
}
