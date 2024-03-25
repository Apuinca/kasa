import { useState } from "react";

import './ListeDeroulante.scss'

import Combo from '../../../Assets/FlecheComboOuverte.png';
import ComboOuverte from '../../../Assets/FlecheCombo.png';
import Liste from "../../Liste/Liste.jsx";

export function ListeDeroulante({ libelle, contenu, mode = "texte", grande = "" }) {
    const [ouvert, etat] = useState(false);

    const tailleCombo = grande === "" ? "comboBox" : "comboBox grande";

    return (
        <article className={tailleCombo} >
            <div className="controleListe">
                <p>{libelle}</p>
                {
                    ouvert ? <img src={Combo} alt="Selecteur" className="combo" onClick={() => etat(!ouvert)} /> :
                        <img src={ComboOuverte} alt="Selecteur" className="comboOuverte" onClick={() => etat(!ouvert)} />
                }
            </div>
            {
                ouvert ? <div className="contenuListe ouvert">{ContenuCombo({ mode, contenu })}</div> :
                    <div className="contenuListe"></div>                    
                }
            </article >
    );
}

function ContenuCombo({ mode, contenu }) {
    const lignesContenu = Array.from(contenu);

    if (mode === "texte") {
        return (<p>{contenu}</p>)
    }
    else if (mode === "ul") {
        return (
            <Liste type="ul">
                {lignesContenu.map((ligne, index) => <li key={index}>{ligne}</li>)}
            </Liste>
        )
    }
    else {
        return (
            <Liste type="ol">
                {lignesContenu.map((ligne, index) => <li key={index}>{ligne}</li>)}
            </Liste>
        )
    }
}

export default ListeDeroulante;