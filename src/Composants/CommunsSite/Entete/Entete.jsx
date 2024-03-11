import Logo from '../../Logo.jsx';
import './Entete.scss';

function Entete({children}) {
    return (
        <div className="navHorizontale">
            <Logo />
            <div className="menuNav">
                {children}
            </div>
        </div>
    );
}

export default Entete;