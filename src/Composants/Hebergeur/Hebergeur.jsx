import pointHebergeur from "../../Assets/Host.png";
import "./Hebergeur.scss";

export function Hebergeur({ nomHebergeur, iconeProfil }) {
    return (
        <div className="Hebergeur">
            <p>{nomHebergeur}</p>
            <img src={iconeProfil} alt="icone hébergeur" />
        </div>
    );
}

export default Hebergeur;