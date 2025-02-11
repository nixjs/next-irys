import {
    sepolia,
    mainnet,
    opBNB,
    opBNBTestnet,
    optimismSepolia,
    optimism,
    arbitrum,
    arbitrumSepolia,
    polygonMumbai,
    polygon,
    avalanche,
    avalancheFuji,
} from '@reown/appkit/networks'

import { WebEthereum, WebArbitrum, WebBNB, WebMatic, WebAvalanche, WebChainlink, WebUSDCEth } from '@irys/web-upload-ethereum'

export const GatewayIrys = (process.env.NEXT_PUBLIC_GATEWAY || 'https://gateway.irys.xyz/').endsWith('/')
    ? process.env.NEXT_PUBLIC_GATEWAY || 'https://gateway.irys.xyz/'
    : (process.env.NEXT_PUBLIC_GATEWAY || 'https://gateway.irys.xyz/') + '/'

export const SpeedUploader = [1.2, 1.5, 2, 2.5, 3]

export const TokenPaid = {
    [sepolia.id]: 'ethereum',
    [mainnet.id]: 'ethereum',
    [opBNB.id]: 'bnb',
    [opBNBTestnet.id]: 'bnb',
    [optimismSepolia.id]: 'optimism',
    [optimism.id]: 'optimism',
    [arbitrum.id]: 'arbitrum',
    [arbitrumSepolia.id]: 'arbitrum',
    [avalanche.id]: 'avalanche',
    [avalancheFuji.id]: 'avalanche',
}

export const IrysWebUploader = {
    [sepolia.id]: WebEthereum,
    [mainnet.id]: WebEthereum,
    [opBNB.id]: WebBNB,
    [opBNBTestnet.id]: WebBNB,
    [optimismSepolia.id]: WebEthereum,
    [optimism.id]: WebEthereum,
    [arbitrum.id]: WebArbitrum,
    [arbitrumSepolia.id]: WebArbitrum,
    [polygon.id]: WebMatic,
    [polygonMumbai.id]: WebMatic,
    [avalanche.id]: WebAvalanche,
    [avalancheFuji.id]: WebAvalanche,
}

export const IrysWebUploaderExtends = {
    chainlink: WebChainlink,
    'usdc-eth': WebUSDCEth,
}
