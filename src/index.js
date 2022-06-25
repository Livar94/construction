import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { ProvideSidebar } from './context/useSidebar';
import { ProvideModel } from './context/useModel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProvideSidebar>
        <ProvideModel>
          <App />
        </ProvideModel>
      </ProvideSidebar>
    </BrowserRouter>
  </React.StrictMode>
);

