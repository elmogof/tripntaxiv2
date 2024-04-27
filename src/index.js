import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import './styles/mantenimiento.css'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()
