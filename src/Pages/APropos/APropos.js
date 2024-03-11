import * as React from 'react';

import Entete from '../../Composants/CommunsSite/Entete/Entete.jsx';
import OptionNavigation from '../../Composants/CommunsSite/OptionNavigation/OptionNavigation.jsx';
import Conteneur from '../../Composants/Conteneur/Conteneur.jsx';
import PiedPage from '../../Composants/CommunsSite/PiedPage/PiedPage.jsx'
import Banniere from '../../Composants/Banniere/Banniere.jsx';

function APropos() {
    return (
        <React.Fragment>
            <header>
                <Entete>
                    < OptionNavigation HRef="/" Libelle="Accueil" />
                    < OptionNavigation HRef="/APropos" Libelle="A propos" Actif="active" />
                </Entete>
            </header>
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