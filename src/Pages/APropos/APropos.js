import * as React from 'react';

import Entete from '../../Composants/Entete/Entete.jsx';
import Conteneur from '../../Composants/Conteneur/Conteneur.jsx';
import PiedPage from '../../Composants/PiedPage/PiedPage.jsx'
import Banniere from '../../Composants/Banniere/Banniere.jsx';

function APropos() {
    return (
        <React.Fragment>
            <header><Entete /></header>
            <main>
                <Conteneur>
                    <Banniere />
                </Conteneur>
            </main>
            <footer><PiedPage /></footer>
        </React.Fragment>
    );
}

export default APropos;