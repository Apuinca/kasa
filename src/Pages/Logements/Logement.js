import * as React from 'react';
import './Logement.scss';

import { useParams, Navigate } from 'react-router-dom';
import Conteneur from '../../Composants/Conteneur/Conteneur.jsx';
import Hebergeur from '../../Composants/Hebergeur/Hebergeur.jsx';
import Carroussel from '../../Composants/Carroussel/Carroussel.jsx';
import ListeDeroulante from '../../Composants/CommunsSite/ListeDeroulante/ListeDeroulante.jsx';
import Titre from '../../Composants/Titre/Titre.jsx';
import Lieu from '../../Composants/Lieu/Lieu.jsx';
import MotsClefs from '../../Composants/MotsClefs/MotsClefs.jsx';
import Entete from '../../Composants/CommunsSite/Entete/Entete.jsx';
import OptionNavigation from '../../Composants/CommunsSite/OptionNavigation/OptionNavigation.jsx';
import Scores from '../../Composants/Score/Score';

import logets from '../../logements.json';


export function Logements() {
    let { id } = useParams();
    let logement = logets.find((logets) => (logets.id === `${id}`));

    React.useEffect(() => {
        document.title = "Kasa - logement (" + logement.location + ")";
    });

    if (!logement) {
        return (<Navigate to="/erreur" replace={true} />)
    }

    const apercus = logement.pictures;
    const titre = logement.title;
    const lieu = logement.location;
    const nom = logement.host.name;
    const profil = logement.host.picture;
    const desc = logement.description;
    const equipe = logement.equipments;
    const mcs = logement.tags;
    const note = logement.rating;

    return (
        <React.Fragment>
            <header>
                <Entete>
                    < OptionNavigation HRef="/" Libelle="Accueil" />
                    < OptionNavigation HRef="/APropos" Libelle="A propos" />
                </Entete>
            </header>
            <main>
                <Conteneur>                                        
                    <Carroussel photoLogement={apercus} />
                    <section className="identification">
                        <div className="titreLieu">
                            <Titre texteTitre={titre} />
                            <Lieu lieu={lieu} />
                        </div>
                        <Hebergeur nomHebergeur={nom} iconeProfil={profil} />
                    </section>
                    <section className="sectionStats">
                        <div className="stats" id="stats">
                            {mcs.map((mc, idx) => (<MotsClefs texte={mc} key={idx} />))}
                        </div>
                        <Scores nbEtoiles={note} />
                    </section>
                    <section className="detail">
                        <ListeDeroulante libelle="Description" contenu={desc} />
                        <ListeDeroulante libelle="Equipement" contenu={equipe} mode="ul" />
                    </section>           
                </Conteneur>
            </main>
        </React.Fragment>
    );
}

export default Logements;