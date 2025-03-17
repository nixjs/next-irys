'use client'

import { useIrysUploader } from '@pkg/context/IrysUploaderProvider'
import React from 'react'

const UploadText = () => {
    const { irysUploader } = useIrysUploader()
    const [loading, setLoading] = React.useState(false)
    const [textData, setTextData] = React.useState<string>('')

    const handleUpload = async () => {
        try {
            setLoading(true)
            if (irysUploader) {
                const tags = [{ name: 'Content-Type', value: 'text/plain' }]
                const receipt = await irysUploader.upload('Demo', { tags })

                const url = `https://gateway.irys.xyz/${receipt.id}`
                console.log('Data uploaded successfully')
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (_error) {
            console.log('Error uploading data')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='border-2 border-primary rounded-2xl p-4 w-full max-w-md'>
            <div className='flex flex-row items-center mb-4'>
                <input
                    type='text'
                    placeholder='Enter text to upload'
                    className='border border-primary rounded-l-2xl px-3 py-2 flex-grow text-black'
                    value={textData}
                    onChange={(e) => setTextData(e.target.value)}
                />
                <button
                    className='bg-primary text-secondary px-4 py-2 rounded-r-2xl shadow-md hover:shadow-lg active:translate-y-1 active:shadow-none transition-all duration-150 ease-in-out flex items-center justify-center'
                    onClick={handleUpload}
                    disabled={loading}
                >
                    {loading ? 'Loading' : 'Upload'}
                </button>
            </div>
        </div>
    )
}

export default UploadText
