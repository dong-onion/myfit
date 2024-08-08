import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import './assets/fonts/Font.css';
import MobilePage from './pages/MobilePage/MobilePage';
import { isMobile } from 'react-device-detect';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    },
  },
});

root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {isMobile ? <MobilePage /> : <App />}
      <ReactQueryDevtools />
    </ThemeProvider>
  </QueryClientProvider>,
);
