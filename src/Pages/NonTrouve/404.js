import * as React from 'react';
import { Link } from 'react-router-dom';
import './404.scss';
import Entete from '../../Composants/CommunsSite/Entete/Entete';
import PiedPage from '../../Composants/CommunsSite/PiedPage/PiedPage';

function NonTrouve() {
    return (
        <React.Fragment>
            <header><Entete /></header>
            <main>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to='/'>Retourner sur la page d'accueil</Link>
            </main>
            <footer><PiedPage /></footer>
        </React.Fragment>
    );
}

export default NonTrouve;