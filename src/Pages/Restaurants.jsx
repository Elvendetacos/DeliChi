import Header from "../Components/Header";
import Layout from "../Conteiners/Layout";
import { useContext } from "react";
import RestaurantSearch from "../Components/RestaurantSearch";
import { useState } from "react";
import User from "../Contextos/ContextoUser";
import ModalRestaurants from "../Components/ModalRestaurants";
function Restaurants() {
  const [search, setSearch] = useState(false);
  const [text, setText] = useState(false);
  const [editar, setEditar] = useState(false);
  const [id, setId] = useState();
  const [Restaurant, setRestaurant] = useState(false)
  const { idUser, setIdUser } = useContext(User)
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
          setRestaurant={setRestaurant}
          setId={setId}
        ></RestaurantSearch>
      </Layout>
    </>
  );
}

export default Restaurants;
