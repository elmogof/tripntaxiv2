import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App'
import './styles/index.css'
import './styles/mantenimiento.css'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './i18n';


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()
