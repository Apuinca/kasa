import "./Hebergeur.scss";

export function Hebergeur({ nomHebergeur, iconeProfil }) {
    return (
        <div className="Hebergeur">
            <p className="nomHebergeur">{nomHebergeur}</p>
            <img src={iconeProfil} alt="icone h&eacute;bergeur" />
        </div>
    );
}

export default Hebergeur;