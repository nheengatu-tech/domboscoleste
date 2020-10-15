import React from 'react';
import ReactDOM from 'react-dom';
import { FirebaseAppProvider } from 'reactfire';
import './index.css';
import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyCIbzYulUSdpkR21ifJwJYNPaGIzc4OCUs",
  authDomain: "cdbl-2cb16.firebaseapp.com",
  databaseURL: "https://cdbl-2cb16.firebaseio.com",
  projectId: "cdbl-2cb16",
  storageBucket: "cdbl-2cb16.appspot.com",
  messagingSenderId: "83733164889",
  appId: "1:83733164889:web:af3e3c7ae2ff0017075248"
}

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
