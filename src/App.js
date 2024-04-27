import { Suspense } from 'react';
import {
  faFacebookSquare,
  faTelegramPlane,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import PageRouter from './screens/PageRouter'

const App = () => {
  return <PageRouter />
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...is loading">
      <App />
    </Suspense>
  );
}

library.add(faEnvelope, faFacebookSquare, faWhatsapp, faTelegramPlane, faPhone)
