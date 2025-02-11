'use client'

import React from 'react'
// import { WebUploader } from '@irys/web-upload'
import BaseWebIrys from '@irys/web-upload/esm/base'
import { useAppKitAccount, useWalletInfo } from '@reown/appkit/react'
// import { phantomAdapter, solflareAdapter } from '@/config/wallet'
// import { WebSolana } from '@irys/web-upload-solana'
import { ContextState, IrysContext } from './useIrysUploader'

const IrysUploaderProvider = ({ children }: { children?: React.ReactNode }) => {
    const [irys, setIrys] = React.useState<BaseWebIrys | null>(null)
    const { isConnected } = useAppKitAccount()
    const { walletInfo } = useWalletInfo()

    React.useEffect(() => {
        // const connectIrys = async () => {
        //     try {
        //         if (walletInfo?.name === 'Phantom')
        //             await phantomAdapter.connect()
        //         if (walletInfo?.name === 'Solflare')
        //             await solflareAdapter.connect()
        //         // await solflareAdapter.connect()
        //         const network = process.env.NEXT_PUBLIC_NETWORK || 'devnet'
        //         const isDev = network === 'devnet'
        //         let irysUploader: BaseWebIrys | null = null
        //         if (isDev) {
        //             if (walletInfo?.name === 'Solflare')
        //                 irysUploader = await WebUploader(WebSolana)
        //                     .withProvider(solflareAdapter)
        //                     .withRpc(solflareAdapter.url)
        //                     .devnet()
        //             if (walletInfo?.name === 'Phantom')
        //                 irysUploader = await WebUploader(WebSolana)
        //                     .withProvider(phantomAdapter)
        //                     .withRpc(phantomAdapter.url)
        //                     .devnet()
        //         } else {
        //             if (walletInfo?.name === 'Solflare')
        //                 irysUploader =
        //                     await WebUploader(WebSolana).withProvider(
        //                         solflareAdapter
        //                     )
        //             if (walletInfo?.name === 'Phantom')
        //                 irysUploader =
        //                     await WebUploader(WebSolana).withProvider(
        //                         phantomAdapter
        //                     )
        //         }
        //         if (irysUploader) {
        //             console.log(`Connected to Irys: ${irysUploader.address}`)
        //             setIrys(irysUploader)
        //         }
        //     } catch (error) {
        //         console.error('Error connecting to Irys:', error)
        //     }
        // }
        // if (isConnected) connectIrys()
    }, [isConnected, walletInfo?.name])

    const value: ContextState = {
        irysUploader: irys,
        irysAddress: irys?.address ?? ''
    }

    return <IrysContext.Provider value={value}>{children}</IrysContext.Provider>
}

export default IrysUploaderProvider
