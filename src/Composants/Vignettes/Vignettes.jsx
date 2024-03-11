import './Vignettes.scss';

function Vignettes({ imageVignette, titreVignette }) {
    return (
        <div className="Vignettes">
            <img src={imageVignette} alt="vignette" />
            <p>{titreVignette}</p>
        </div >
    );
}

export default Vignettes;