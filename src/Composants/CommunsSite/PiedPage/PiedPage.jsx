import logoPiedPage from '../../../Assets/LOGO_Blanc.png';
import './PiedPage.scss';

function PiedPage() {
    return (
        <section className="PiedPages">
            <img src={logoPiedPage} alt="pied de page" />
            <p>&copy; 2020 Kasa. All rights reserved</p>
        </section>);
}

export default PiedPage;