import './Banniere.scss';

function Banniere({ image, altImage, texte, foncee = false }) {
    const clareteImage = foncee ? "Banniere foncee" : "Banniere";

    return (<section className={clareteImage}>
        <img src={image} alt={altImage} />
        <div className="TexteBanniere">{texte}</div>
    </section>);
}

export default Banniere;