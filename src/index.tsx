import reportWebVitals from './reportWebVitals';
import React, { Suspense }  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import BigProvider from './Store';
import Routes from './Router';
import { firebaseConfig } from './utils/config/firebase';
import { FirebaseAppProvider } from 'reactfire';


  
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BigProvider>
      <FirebaseAppProvider firebaseConfig={firebaseConfig} > 
        <Suspense fallback={' Conectando... '}>

          <Routes />
       
        </Suspense>

        </FirebaseAppProvider>
      </BigProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
