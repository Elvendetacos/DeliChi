import Header from "../Components/Header";
import Layout from "../Conteiners/Layout";
import { useContext } from "react";
import RestaurantSearch from "../Components/RestaurantSearch";
import { useState } from "react";
import User from "../Contextos/ContextoUser";
import ModalRestaurants from "../Components/ModalRestaurants";
import ContextoRestaurantFound from "../Contextos/ContextoRestaurantFound";

function Restaurants() {
  const [search, setSearch] = useState(true);
  const [text, setText] = useState(false);
  const [editar, setEditar] = useState(false);
  const [id, setId] = useState();
  const [Restaurant, setRestaurant] = useState(false)
  const { idUser, setIdUser } = useContext(User)
  const {restaurantFound, setRestaurantFound} = useContext(ContextoRestaurantFound);
  
  return (
    <>
      {Restaurant && (
        <ModalRestaurants
          setRestaurant={setRestaurant}
          id={id}
          idUser={idUser}
        />
      )}

      <Header search={search} text={text} />
      <Layout>
        <RestaurantSearch
          restaurantFound= {restaurantFound}
          setRestaurant={setRestaurant}
          setId={setId}
        ></RestaurantSearch>
      </Layout>
    </>
  );
}

export default Restaurants;
