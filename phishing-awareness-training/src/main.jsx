// src/main.jsx

import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react'; // Make sure this line is clean
import App from './App.jsx';
import './App.css';
import './styles/theme.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
