import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ✅ Import your provider
import ShopContextProvider from './Components/Contex/shopcontex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* ✅ Wrap the whole app with context provider */}
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </React.StrictMode>
);

reportWebVitals();
