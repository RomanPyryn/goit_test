import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from './components/App/App';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <BrowserRouter basename="/social_network/">
      <App />
      <ToastContainer position="top-center" autoClose={3000} theme="dark" />
    </BrowserRouter>
  </React.StrictMode>
);
