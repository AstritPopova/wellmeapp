import React from 'react'
import { createRoot } from 'react-dom/client'
import { IonApp, setupIonicReact } from '@ionic/react'
import App from './App.jsx'

import '@ionic/react/css/core.css'
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

import './index.css'

setupIonicReact()

const Root = () => (
  <IonApp>
    <App />
  </IonApp>
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
