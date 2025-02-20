import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './context/queryClient.ts';

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <PrimeReactProvider value={{
      pt: Tailwind
    }}>
      <App />
    </PrimeReactProvider>
  </QueryClientProvider>
)
