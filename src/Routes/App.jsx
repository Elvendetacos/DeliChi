import { BrowserRouter, Routes, Route } from "react-router-dom";
import BusinessRegister from "../Pages/BusinessRegister";
import ListRestaurant from "../Pages/ListRestaurant";
import RestaurantEdit from "../Pages/RestaurantEdit";
import Restaurants from "../Pages/Restaurants";
import Home from "../Pages/Home";
import Contexto from "../Contextos/ContextoCeo";
import User from "../Contextos/ContextoUser";
import ContextoRestaurant from "../Contextos/ContextoRestaurant";
import ContextoRestaurantFound from "../Contextos/ContextoRestaurantFound";
import Resta from "../Components/ModalRestaurants";
import ContextoTokenCeo from "../Contextos/ContextoTokenCeo";
import { useState } from "react";
import { Provider } from "react-redux";

function App() {
  const [id, setId] = useState();
  const [idUser, setIdUser] = useState();
  const [idRestaurant, setIdRestaurant] = useState();
  const [restaurantFound, setRestaurantFound] = useState([]);
  const [tokenCeo, setTokenCeo] = useState()

  return (
    <BrowserRouter>
      <ContextoRestaurantFound.Provider
        value={{ restaurantFound, setRestaurantFound }}
      >
        <Contexto.Provider value={{ id, setId }}>
          <User.Provider value={{ idUser, setIdUser }}>
            <ContextoRestaurant.Provider
              value={{ idRestaurant, setIdRestaurant }}
            >
              <ContextoTokenCeo.Provider value={{tokenCeo, setTokenCeo}}>
              <Routes>
                <Route path="/Restaurants" element={<Restaurants />}></Route>
                <Route path="/Restaurant" element={<RestaurantEdit />}></Route>
                <Route path="/List" element={<ListRestaurant />}></Route>
                <Route path="/Register" element={<BusinessRegister />}></Route>
                <Route path="/Restaurante" element={<Resta />}></Route>
                <Route path="/" element={<Home />}></Route>
              </Routes>
              </ContextoTokenCeo.Provider>
            </ContextoRestaurant.Provider>
          </User.Provider>
        </Contexto.Provider>
      </ContextoRestaurantFound.Provider>
    </BrowserRouter>
  );
}

export default App;
