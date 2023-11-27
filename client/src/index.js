import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { AppointmentContextProvider } from './context/AppointmentContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AppointmentContextProvider>
        <App />
      </AppointmentContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);