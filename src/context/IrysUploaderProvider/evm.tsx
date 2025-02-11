'use client'

import React from 'react'
import BaseWebIrys from '@irys/web-upload/esm/base'
import { useAppKitAccount, useAppKitNetwork } from '@reown/appkit/react'
import { WebUploader } from '@irys/web-upload'
import { sepolia, mainnet } from 'viem/chains'
import { createWalletClient, createPublicClient, custom, Chain } from 'viem'
import { ViemV2Adapter } from '@irys/web-upload-ethereum-viem-v2'
import { ContextState, IrysContext } from './useIrysUploader'
import { ChainById, TransportByChainId } from '@pkg/config/wallet'
import WebEthereum from '@irys/web-upload-ethereum'

const mode = 'devnet'

const IrysUploaderProvider = ({ children }: { children?: React.ReactNode }) => {
    const [irys, setIrys] = React.useState<BaseWebIrys | null>(null)
    const { isConnected } = useAppKitAccount()
    const { chainId } = useAppKitNetwork()

    React.useEffect(() => {
        const connectIrys = async () => {
            try {
                console.log('Network changed', mode)
                const isDev = mode === 'devnet'
                const isDesktop = typeof window.ethereum !== 'undefined'
                const fChainId = Number(chainId) as unknown as keyof typeof ChainById
                const chain = (fChainId ? ChainById[fChainId] : isDev ? sepolia : mainnet) as Chain

                const transport = isDesktop ? custom((window as any).ethereum) : TransportByChainId[fChainId]
                const provider = createWalletClient({
                    chain,
                    transport,
                })

                const publicClient = createPublicClient({
                    chain,
                    transport,
                })

                // const webUploader = constructableWebTokenFund
                //     ? IrysWebUploaderExtends[constructableWebTokenFund]
                //     : IrysWebUploader[fChainId]

                const irysUploader = await WebUploader(WebEthereum)
                    .withAdapter(
                        ViemV2Adapter(provider, {
                            publicClient,
                        })
                    )
                    .network(mode)
                if (irysUploader) {
                    console.log(`Connected to Irys: ${irysUploader.address}`, irysUploader.url)
                    setIrys(irysUploader)
                } else throw new Error('Failed to connect irys')
            } catch (error) {
                // toast(<div>{JSON.stringify(error)}</div>)
                console.error('Error connecting to Irys:', error)
            }
        }
        if (isConnected && chainId && mode) {
            connectIrys()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isConnected, mode, chainId])

    const value: ContextState = {
        irysUploader: irys,
        irysAddress: irys?.address ?? '',
    }

    return <IrysContext.Provider value={value}>{children}</IrysContext.Provider>
}

export default IrysUploaderProvider
