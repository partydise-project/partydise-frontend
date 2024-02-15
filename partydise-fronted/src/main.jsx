import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import Layout from './Components/Layout';

const root = document.getElementById('root');
const domain=import.meta.env.VITE_REACT_APP_AUTHO_DOMAIN
const clientId=import.meta.env.VITE_REACT_APP_AUTHO_CLIENT_ID
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Router>
        <Layout>
           <App />
        </Layout>
      </Router>
    </Auth0Provider>
  </React.StrictMode>
);