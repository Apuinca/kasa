import './Banniere.scss';

function Banniere({ image, altImage, texte }) {
    return (<div className="Banniere">
        <img src={image} alt={altImage} />
        <div className="TexteBanniere">{texte}</div>
    </div>);
}

export default Banniere;