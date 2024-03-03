import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: [ 'class' ],
    content: [ './src/**/*.{ts,tsx}', './*.html' ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                /* Color Vars */
                primary: 'var(--material-theme--sys--dark--primary)',
                surfaceTint: 'var(--material-theme--sys--dark--surface-tint)',
                onPrimary: 'var(--material-theme--sys--dark--on-primary)',
                primaryContainer: 'var(--material-theme--sys--dark--primary-container)',
                onPrimaryContainer: 'var(--material-theme--sys--dark--on-primary-container)',
                secondary: 'var(--material-theme--sys--dark--secondary)',
                onSecondary: 'var(--material-theme--sys--dark--on-secondary)',
                secondaryContainer: 'var(--material-theme--sys--dark--secondary-container)',
                onSecondaryContainer: 'var(--material-theme--sys--dark--on-secondary-container)',
                tertiary: 'var(--material-theme--sys--dark--tertiary)',
                onTertiary: 'var(--material-theme--sys--dark--on-tertiary)',
                tertiaryContainer: 'var(--material-theme--sys--dark--tertiary-container)',
                onTertiaryContainer: 'var(--material-theme--sys--dark--on-tertiary-container)',
                error: 'var(--material-theme--sys--dark--error)',
                onError: 'var(--material-theme--sys--dark--on-error)',
                errorContainer: 'var(--material-theme--sys--dark--error-container)',
                onErrorContainer: 'var(--material-theme--sys--dark--on-error-container)',
                background: 'var(--material-theme--sys--dark--background)',
                onBackground: 'var(--material-theme--sys--dark--on-background)',
                surface: 'var(--material-theme--sys--dark--surface)',
                onSurface: 'var(--material-theme--sys--dark--on-surface)',
                surfaceVariant: 'var(--material-theme--sys--dark--surface-variant)',
                onSurfaceVariant: 'var(--material-theme--sys--dark--on-surface-variant)',
                outline: 'var(--material-theme--sys--dark--outline)',
                outlineVariant: 'var(--material-theme--sys--dark--outline-variant)',
                shadow: 'var(--material-theme--sys--dark--shadow)',
                scrim: 'var(--material-theme--sys--dark--scrim)',
                inverseSurface: 'var(--material-theme--sys--dark--inverse-surface)',
                inverseOnSurface: 'var(--material-theme--sys--dark--inverse-on-surface)',
                inversePrimary: 'var(--material-theme--sys--dark--inverse-primary)',
                primaryFixed: 'var(--material-theme--sys--dark--primary-fixed)',
                onPrimaryFixed: 'var(--material-theme--sys--dark--on-primary-fixed)',
                primaryFixedDim: 'var(--material-theme--sys--dark--primary-fixed-dim)',
                primaryFixedVariant: 'var(--material-theme--sys--dark--on-primary-fixed-variant)',
                secondaryFixed: 'var(--material-theme--sys--dark--secondary-fixed)',
                onSecondaryFixed: 'var(--material-theme--sys--dark--on-secondary-fixed)',
                secondaryFixedDim: 'var(--material-theme--sys--dark--secondary-fixed-dim)',
                secondaryFixedVariant: 'var(--material-theme--sys--dark--on-secondary-fixed-variant)',
                tertiaryFixed: 'var(--material-theme--sys--dark--tertiary-fixed)',
                onTertiaryFixed: 'var(--material-theme--sys--dark--on-tertiary-fixed)',
                tertiaryFixedDim: 'var(--material-theme--sys--dark--tertiary-fixed-dim)',
                tertiaryFixedVariant: 'var(--material-theme--sys--dark--on-tertiary-fixed-variant)',
                surfaceDim: 'var(--material-theme--sys--dark--surface-dim)',
                surfaceBright: 'var(--material-theme--sys--dark--surface-bright)',
                surfaceContainerLowest: 'var(--material-theme--sys--dark--surface-container-lowest)',
                surfaceContainerLow: 'var(--material-theme--sys--dark--surface-container-low)',
                surfaceContainer: 'var(--material-theme--sys--dark--surface-container)',
                surfaceContainerHigh: 'var(--material-theme--sys--dark--surface-container-high)',
                surfaceContainerHighest: 'var(--material-theme--sys--dark--surface-container-highest)',
                /* Color Vars */
            },
            borderRadius: {
                lg: `var(--radius)`,
                md: `calc(var(--radius) - 2px)`,
                sm: 'calc(var(--radius) - 4px)',
            },
            fontFamily: {
                sans: [ 'var(--font-sans)', ...fontFamily.sans ],
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [ require( 'tailwindcss-animate' ) ],
}
