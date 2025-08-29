import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import './App.css';
import './styles/theme.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
