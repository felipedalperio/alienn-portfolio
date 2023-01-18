import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ScrollContextProvider } from './context/ScrollContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ScrollContextProvider>
      <App />
    </ScrollContextProvider>
  </React.StrictMode>
);

