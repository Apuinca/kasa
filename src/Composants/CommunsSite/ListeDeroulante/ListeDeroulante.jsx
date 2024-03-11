import { useState, Fragment } from "react";

import './ListeDeroulante.scss'

import Combo from '../../../Assets/FlecheCombo.png';
import ComboOuverte from '../../../Assets/FlecheComboOuverte.png';
import Liste from "../../Liste";

export function ListeDeroulante({ libelle, contenu, mode = "texte" }) {
    const [ouvert, etat] = useState(false);

    return (
        <article className="comboBox">
            <div className="controlListe">
                <p>{libelle}</p>
                {
                    ouvert ? <img src={Combo} alt="Selecteur" className="combo" onClick={() => etat(!ouvert)} /> :
                        <img src={ComboOuverte} alt="Selecteur" className="comboOuverte" onClick={() => etat(!ouvert)} />
                }
            </div>
            <div className="contenuListe">
                {ContenuCombo({ contenu, mode })}
            </div>
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