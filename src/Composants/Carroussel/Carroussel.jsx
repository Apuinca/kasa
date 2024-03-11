import './Carroussel.scss';

import Precedante from "../../Assets/precedante.png";
import Suivante from "../../Assets/suivante.png";

let numImage = 1;
let pageCourante = 1;

export function Carroussel({ photoLogement }) {
    const photoEnCours = photoLogement[0];
    
    return (
        <section className="carroussel">
            <img className="fleches prec" src={Precedante} alt="Précédente" onClick={() => naviguerCarrousselPrec(photoLogement)} />
            <img className="fleches suiv" src={Suivante} alt="Suivante" onClick={() => naviguerCarrousselSuiv(photoLogement)} />
            <p className="comptePage">{pageCourante}/{photoLogement.length}</p>                                    
            <img className="carroussel-img" src={photoEnCours} alt="Carroussel du logement" />     
        </section>
    );
}

function naviguerCarrousselPrec(ensPhotos) {
    naviguerCarroussel(ensPhotos, false);
}

function naviguerCarrousselSuiv(ensPhotos) {
    naviguerCarroussel(ensPhotos);
}

function naviguerCarroussel(carroussel, navigationAvant = true) {
    const pages = document.querySelector(".comptePage");
    const image = document.querySelector(".carroussel-img");

    if (navigationAvant) {
        if (numImage === carroussel.length) {
            numImage = 1;
        }
        else {
            numImage++;
        }
    } else {
        if (numImage === 1) {
            numImage = carroussel.length;
        }
        else {
            numImage--;
        }
    }

    pages.innerHTML = pages.innerHTML.replace(pageCourante, numImage);

    image.setAttribute("src", carroussel[numImage - 1]);
    pageCourante = numImage;
}

export default Carroussel;