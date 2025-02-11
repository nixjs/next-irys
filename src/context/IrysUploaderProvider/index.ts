import EvmProvider from './evm'
// import SolanaProvider from './solana'
import { useIrysUploader } from './useIrysUploader'

const IrysUploaderProvider = Object.assign(
    {},
    {
        Evm: EvmProvider,
        // Solana: SolanaProvider
    }
)

export default IrysUploaderProvider

export { useIrysUploader }
