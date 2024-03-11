import { BrowserRouter as Routeur, Routes, Route } from 'react-router-dom';
import APropos from '../../Pages/APropos/APropos.js';
import Accueil from '../../Pages/Accueil/App.js';
import Logements from '../../Pages/Logements/Logement.js';
import NonTrouve from '../../Pages/NonTrouve/404.js'

export function Routage() {
    return (
        <Routeur>
            <Routes>
                <Route path='/' element={<Accueil />} />
                <Route path='/APropos' element={<APropos />} />
                <Route path='/Logements/:id' element={<Logements />} />
                <Route path='*' element={<NonTrouve />} />
            </Routes>
        </Routeur>
    );
}

export default Routage;