import { useAppKit, useAppKitAccount, useDisconnect } from '@reown/appkit/react'
import clsx from 'clsx'
import React from 'react'

export default function ConnectWalletButton() {
    const { open } = useAppKit()
    const { disconnect } = useDisconnect()
    const { isConnected, address } = useAppKitAccount()

    if (isConnected && address)
        return (
            <button
                className={clsx(
                    'rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
                )}
                aria-label='Post'
                type='button'
                onClick={() => disconnect()}
            >
                Disconnect wallet
            </button>
        )

    return (
        <button
            className={clsx(
                'rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
            )}
            aria-label='Connect wallet'
            type='button'
            onClick={async () => await open()}
        >
            Connect wallet
        </button>
    )
}
