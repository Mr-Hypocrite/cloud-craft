import type { Config } from 'tailwindcss'

export default {
    content: ['./index.html', './src/**/*.{html, js, jsx, ts, tsx}', './src/**/*.tsx'],
    theme: {
        extend: {},
    },
    plugins: [],
} satisfies Config
