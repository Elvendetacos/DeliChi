import { BrowserRouter, Routes, Route } from "react-router-dom";
import BusinessRegister from "../Pages/BusinessRegister";
import ListRestaurant from "../Pages/ListRestaurant";
import RestauranrEdit from "../Pages/RestaurantEdit";
import Home from "../Pages/Home";
import Contexto from '../Contextos/ContextoCeo';
import {useState} from 'react';

function App() {

    const [id, setId] = useState()

    return ( 
        <BrowserRouter>
            <Contexto.Provider value={{id, setId}} >
            <Routes>
                <Route path="/Register" element={<BusinessRegister />}></Route>
                <Route path="/List" element={<ListRestaurant />}></Route>
                <Route path="/Restaurant" element={<RestauranrEdit />}></Route>
                <Route path="/" element={<Home />}></Route>
            </Routes>
            </Contexto.Provider>
        </BrowserRouter>
     );
}

export default App;