import { BrowserRouter, Routes, Route } from "react-router-dom";
import BusinessRegister from "../Pages/BusinessRegister";
import ListRestaurant from "../Pages/ListRestaurant";
import RestauranrEdit from "../Pages/RestaurantEdit";
import Home from "../Pages/Home";
import Contexto from "../Contextos/ContextoCeo";
import User from "../Contextos/ContextoUser";
import ContextoRestaurant from "../Contextos/ContextoRestaurant";
import Resta from "../Components/ModalRestaurants"
import { useState } from "react";

function App() {
  const [id, setId] = useState();
  const [idUser, setIdUser] = useState();
  const [idRestaurant, setIdRestaurant] = useState();

  return (
    <BrowserRouter>
      <Contexto.Provider value={{ id, setId }}>
        <User.Provider value={{ idUser, setIdUser }}>
          <ContextoRestaurant.Provider
            value={{ idRestaurant, setIdRestaurant }}
          >
            <Routes>
              <Route path="/Restaurant" element={<RestauranrEdit />}></Route>
              <Route path="/List" element={<ListRestaurant />}></Route>
              <Route path="/Register" element={<BusinessRegister />}></Route>
              <Route path="/Restaurante" element={<Resta/>}></Route> 
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </ContextoRestaurant.Provider>
        </User.Provider>
      </Contexto.Provider>
    </BrowserRouter>
  );
}

export default App;
