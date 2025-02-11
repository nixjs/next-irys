'use client'

import BaseWebIrys from '@irys/web-upload/esm/base'
import React from 'react'

export interface ContextState {
    irysUploader: BaseWebIrys | null
    irysAddress: string
}

export const IrysContext = React.createContext<ContextState>({} as ContextState)

export function useIrysUploader(): ContextState {
    if (!IrysContext)
        throw new Error(
            'useIrysUploader must be used within IrysUploaderProvider'
        )
    return React.useContext(IrysContext)
}
