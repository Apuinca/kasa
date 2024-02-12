import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Routeur, Routes, Route } from 'react-router-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import APropos from './Pages/APropos/APropos.js';
import Accueil from './Pages/Accueil/App.js';
import NonTrouve from './Pages/NonTrouve/404.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Routeur>
            <Routes>
                <Route path='/' element={<Accueil />} />
                <Route path='/APropos' element={<APropos />} />
                <Route path='*' element={<NonTrouve /> } />
            </Routes>
        </Routeur>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();