import * as React from 'react';
import './App.scss';
import Entete from '../../Composants/Entete/Entete.jsx';
import Conteneur from '../../Composants/Conteneur/Conteneur.jsx';
import PiedPage from '../../Composants/PiedPage/PiedPage.jsx'
import Banniere from '../../Composants/Banniere/Banniere.jsx';
import Galerie from '../../Composants/Galerie/Galerie.jsx';
import '../../Composants/Banniere/Banniere.scss';
import photoBanniere from '../../Assets/photoBanniere.png';
import Vignettes from '../../Composants/Vignettes/Vignettes.jsx';

//try {
//        const connexionJSON = await fetch('../../logements.json');
//    const listeLogements = connexionJSON.json();

//        console.log(listeLogements);
//    }
//    catch (err) {
//        console.log("erreur", err.message );
//}

function App() {
    const toto = [{
        "id": "c67ab8a7",
        "title": "Appartement cosy",
        "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        "pictures": [
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
        ],
        "description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
        "host": {
            "name": "Nathalie Jean",
            "picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
        },
        "rating": "5",
        "location": "Ile de France - Paris 17e",
        "equipments": [
            "�quipements de base",
            "Micro-Ondes",
            "Douche italienne",
            "Frigo",
            "WIFI"
        ],
        "tags": [
            "Batignolle",
            "Montmartre"
        ]
    },
    {
        "id": "b9123946",
        "title": "Magnifique appartement proche Canal Saint Martin",
        "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
        "pictures": [
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-2.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-4.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-5.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-6.jpg"
        ],
        "description": "Profitez du charme de la vie parisienne dans un magnifique appartement. A 3 minutes � pied du Canl Saint Martin, vous serez proche des transports, mais �galement de nombreux commerces. L'appartement est tout �quip�, et poss�de �galement un parking pour ceux qui souhaitent se d�placer en voiture.",
        "host": {
            "name": "Della Case",
            "picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg"
        },
        "rating": "4",
        "location": "Ile de France - Paris 10e",
        "equipments": [
            "Parking",
            "S�che Cheveux",
            "Machine � laver",
            "Wi-fi",
            "Cuisine �quip�e",
            "T�l�vision"
        ],
        "tags": [
            "Canal Saint Martin",
            "R�publique",
            "Appartement"
        ]
    },
    {
        "id": "46d188c5",
        "title": "Studio de charme - Buttes Chaumont",
        "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
        "pictures": [
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-2.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-3.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-4.jpg"
        ],
        "description": "� seulement deux pas des Buttes Chaumont, venez d�couvrir Paris dans ce studio tout �quip�. Enti�rement �quip� pour votre confort et �l�gamment d�cor�, il vous permettra de vivre comme un Parisien le temps de votre s�jour.",
        "host": {
            "name": "Franck Maher",
            "picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg"
        },
        "rating": "3",
        "location": "Ile de France - Paris 20e",
        "equipments": [
            "Wi-fi",
            "Cuisine �quip�e",
            "T�l�vision",
            "S�che Cheveux"
        ],
        "tags": [
            "Buttes Chaumont",
            "Laumi�re",
            "Studio"
        ]
    }];
    

    return (
        <React.Fragment>
            <header><Entete /></header>
            <main>
                <Conteneur>
                    <Banniere className="Banniere" image={photoBanniere} altImage="Image de la banniere" texte="Chez vous, partout et ailleurs"  />
                    <Galerie>
                        {toto.map((loge) => (<Vignettes imageVignette={loge.cover} titreVignette={loge.title} key={loge.id} />))}
                    </Galerie>
                </Conteneur>
            </main>
            <footer><PiedPage /></footer>
        </React.Fragment>
  );
}

export default App;