import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeContext from '@context/ThemeContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContext.Provider value="blue">
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>
);
