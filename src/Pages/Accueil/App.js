import * as React from 'react';
import './App.scss';
import Conteneur from '../../Composants/Conteneur/Conteneur.jsx';
import Banniere from '../../Composants/Banniere/Banniere.jsx';
import Galerie from '../../Composants/Galerie/Galerie.jsx';
import '../../Composants/Banniere/Banniere.scss';
import photoBanniere from '../../Assets/photoBanniere.png';
import Vignettes from '../../Composants/Vignettes/Vignettes.jsx';
import logements from '../../logements.json';
import Entete from '../../Composants/CommunsSite/Entete/Entete.jsx';
import OptionNavigation from '../../Composants/CommunsSite/OptionNavigation/OptionNavigation.jsx';

import { NavLink } from 'react-router-dom';

function App() {
    return (
        <React.Fragment>
            <header>
                <Entete>
                    < OptionNavigation HRef="/" Libelle="Accueil" Actif="active" />
                    < OptionNavigation HRef="/APropos" Libelle="A propos" />
                </Entete>
            </header>
            <main>
                <Conteneur>
                    <Banniere image={photoBanniere} altImage="Image de la banniere" texte="Chez vous, partout et ailleurs" foncee={true} />
                    <Galerie>
                        {logements.map((loge, index) => (
                            <NavLink to={`/Logements/${loge.id}`} key={index}>                               
                                <Vignettes imageVignette={loge.cover} titreVignette={loge.title} />
                            </NavLink>
                        ))}
                    </Galerie>
                </Conteneur>
            </main>
        </React.Fragment>
    );
}

export default App;