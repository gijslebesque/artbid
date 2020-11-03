import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Store } from './state/store';
import { AuthIsLoaded } from './components/authentication/authIsLoaded';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <AuthIsLoaded>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthIsLoaded>
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
