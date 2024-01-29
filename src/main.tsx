import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@/App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './output.css'

const queryClient = new QueryClient( {
    defaultOptions: {
        queries: {
            suspense: true,
            refetchOnWindowFocus: true,
            staleTime: 5 * 1000,
        },
    },
} )

ReactDOM.createRoot( document.getElementById( 'root' )! ).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Suspense>
                <App />
            </Suspense>
        </QueryClientProvider>
    </React.StrictMode>
)
