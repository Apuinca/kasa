import './Banniere.scss';

function Banniere({ image, altImage, texte }) {
    return (<section className="Banniere">
        <img src={image} alt={altImage} />
        <div className="TexteBanniere">{texte}</div>
    </section>);
}

export default Banniere;