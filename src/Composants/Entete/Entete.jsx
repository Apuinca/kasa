import OptionNavigation from '../OptionNavigation/OptionNavigation.jsx';
import Logo from '../Logo.jsx';
import './Entete.scss';

function Entete() {
    return (
        <div className="navHorizontale">
            <Logo />
            <div className="menuNav">
                < OptionNavigation HRef="#" Libelle="Accueil" Actif="active" />
                < OptionNavigation HRef="#" Libelle="A propos" />
            </div>
        </div>
    );
}

export default Entete;