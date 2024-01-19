import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import Layout from './Components/Layout';

const root = document.getElementById('root');


const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-2my3nlwvtd1vb8kx.us.auth0.com"
      clientId="ziWyILXdWJt0Dc7eIsI9MJmPC6H7cy6D"
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