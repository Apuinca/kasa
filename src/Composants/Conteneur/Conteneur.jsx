//  Composant correspondant à la partie propre à chaque page.

import * as React from "react";
import Banniere from '../Banniere/Banniere.jsx';
import '../Banniere/Banniere.scss';
import photoBanniere from '../../Assets/photoBanniere.png';
import Galerie from "../Galerie/Galerie.jsx";
import Vignettes from "../Vignettes/Vignettes.jsx";

function Conteneur({children}) {
    
    return (
        <section>
            {children}
        </section>
    );
}

export default Conteneur;