import * as React from 'react';
import './APropos.scss';

import Conteneur from '../../Composants/Conteneur/Conteneur.jsx';
import ListeDeroulante from '../../Composants/CommunsSite/ListeDeroulante/ListeDeroulante.jsx';
import Banniere from '../../Composants/Banniere/Banniere.jsx';
import imageAPropos from '../../Assets/photoAPropos.png';
import Entete from '../../Composants/CommunsSite/Entete/Entete.jsx';
import OptionNavigation from '../../Composants/CommunsSite/OptionNavigation/OptionNavigation.jsx';


function APropos() {
    const fiabilite = "Les annonces post\u00E9es sur Kasa garantissent une fiabilit\u00E9 totale. Les photos sont conformes aux logements, " +
        "et toutes les informations sont r\u00E9guli\u00E8rement v\u00E9rifi\u00E9es par nos \u00E9quipes.";

    const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage " +
        "entra\u00EEnera une exclusion de notre plateforme";

    const securite = "La s\u00E9curit\u00E9 est la priorit\u00E9 de Kasa. Aussi bien pour nos h\u00F4tes que pour les voyageurs, chaque logement" +
        " correspond aux crit\u00E8res de s\u00E9curit\u00E9 \u00E9tablis par nos services. En laissant une note aussi bien \u00E0 l'h\u00F4te " +
        "au locataire, cela permet \u00E0 nos \u00E9quipes de v\u00E9rifier que les standards sont bien respect\u00E9s. Nous organisons " +
        "\u00E9galement des ateliers sur la s\u00E9curit\u00E9 domestique pour nos h\u00F4tes";

    React.useEffect(() => {
        document.title = "Kasa - A propos"
    });
    
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
                    <Banniere image={imageAPropos} altImage="banni&egrave;re A Propos" texte="" />
                    <section className="Sujets">
                        <ListeDeroulante libelle="Fiabilit&eacute;" contenu={fiabilite} grande="grande" />
                        <ListeDeroulante libelle="Respect" contenu={respect} grande="grande" />
                        <ListeDeroulante libelle="Service" contenu={respect} grande="grande" />
                        <ListeDeroulante libelle="S&eacute;curit&eacute;" contenu={securite} grande="grande" />
                    </section>
                </Conteneur>
            </main>
        </React.Fragment>
    );
}

export default APropos;