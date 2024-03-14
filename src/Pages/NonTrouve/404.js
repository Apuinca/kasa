import * as React from 'react';
import { Link } from 'react-router-dom';
import './404.scss';

function NonTrouve() {
    return (
        <React.Fragment>
            <main>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to='/'>Retourner sur la page d'accueil</Link>
            </main>
        </React.Fragment>
    );
}

export default NonTrouve;