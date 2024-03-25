import logoPiedPage from '../../../Assets/LOGO_Blanc.png';
import './PiedPage.scss';

function PiedPage() {
    return (
        <footer className="PiedPages">
            <img src={logoPiedPage} alt="pied de page" />
            <p>&copy; 2020 Kasa. All rights reserved</p>
        </footer>);
}

export default PiedPage;