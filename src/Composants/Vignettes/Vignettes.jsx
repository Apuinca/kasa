import './Vignettes.scss';

function Vignettes({ imageVignette, titreVignette, key }) {
    return (
        <div className="Vignettes">
            <img src={imageVignette} alt="vignette" id={key} />
            <p>{titreVignette}</p>
        </div >
    );
}

export default Vignettes;