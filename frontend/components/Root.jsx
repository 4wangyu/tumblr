import React from 'react'
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { BreakpointProvider } from 'contexts/BreakpointContext';
import App from './App.jsx';

const queries = {
  // xs: '(max-width: 320px)',
  // sm: '(max-width: 720px)',
  md: '(max-width: 990px)',
  lg: '(max-width: 1280px)',
  or: '(orientation: portrait)', // we can check orientation also
}

const Root = ({ store }) => (
  <StoreProvider store={store}>
    <BrowserRouter>
      <BreakpointProvider queries={queries}>
        <App />
      </BreakpointProvider>
    </BrowserRouter>
  </StoreProvider>
)

export default Root;