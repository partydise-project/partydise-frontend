import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Auth0Provider
 domain="dev-2my3nlwvtd1vb8kx.us.auth0.com"
 clientId="ziWyILXdWJt0Dc7eIsI9MJmPC6H7cy6D"
 authorizationParams={{
   redirect_uri: window.location.origin
 }}
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>,
)
