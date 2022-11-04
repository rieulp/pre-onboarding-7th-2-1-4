import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
