import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import CartContextsProvider from './components/contexts/cartContexts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextsProvider>
    <App/>
    </CartContextsProvider>
  </React.StrictMode>
);
