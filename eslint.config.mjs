import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        rules: {
            '@next/next/no-img-element': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-require-imports': 'off',
            '@typescript-eslint/no-namespace': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',
            'no-unused-expressions': ['warn'],
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
            'comma-dangle': 'off',
            indent: 'off',
            'linebreak-style': 'off',
            quotes: ['warn', 'single'],
            semi: 'off',
            'max-len': 'off',
        },
    },
]

export default eslintConfig
