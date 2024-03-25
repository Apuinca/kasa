import etoileOK from '../../Assets/EtoileOK.png';
import etoileKO from '../../Assets/EtoileKO.png';

import './Score.scss';

export function Scores({ nbEtoiles }) {
    return (
        <div className="scoreLogement">
            {Resultat(nbEtoiles)}
        </div>
    )
}

function Resultat(EtoilesScore) {
    const nbEtoileMax = 5;
    let tabEtoiles = [];

    let i = 0;

    for (i; i < EtoilesScore; i++) {
        tabEtoiles.push(<img src={etoileOK} alt='&egrave;toile {$i} sur {$EtoilesScore}' key={i} />);
        }

    for (i; i < nbEtoileMax; i++) {
        tabEtoiles.push(<img src={etoileKO} alt="&egrave;toile inactive" key={i} />);
    }

    return tabEtoiles;
}

export default Scores;