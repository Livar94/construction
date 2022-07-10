import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { ProvideSidebar } from './context/useSidebar';
import { ProvideModel } from './context/useModel';
import { ProvideAboutModel } from './context/useAboutModel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProvideSidebar>
        <ProvideModel>
          <ProvideAboutModel>
            <App />
          </ProvideAboutModel>
        </ProvideModel>
      </ProvideSidebar>
    </BrowserRouter>
  </React.StrictMode>
);

