//  Composant correspondant � la partie propre � chaque page.

import * as React from "react";
import '../Conteneur/Conteneur.scss';

function Conteneur({children}) {
    
    return (
        <section className="conteneur">
            {children}
        </section>
    );
}

export default Conteneur;