import "../assets/Styles/ListR.css";
import { useEffect, useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Contexto from "../Contextos/ContextoCeo";
import Rafa from "../assets/Img/rafa.jpg";

function RestaurantSearch({setRestaurant, setId, restaurantFound}) {
  const [state, setState] = useState([]);
  const [zone, setZone] = useState([]);
  const zoneSelect = useRef(null) 
  const navigate = useNavigate();

  const { id } = useContext(Contexto);

  const zonesData = () => {
    fetch(`http://localhost:8080/zone/zones`, {
      method: "GET",
      headers: {
        Accept: "aplication/json",
        "Content-Type": "Aplication/json",
      },
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((respuesta) => setZone(respuesta.data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const RestaurantList = () => {
    fetch(`http://localhost:8080/restaurant/restaurants`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((respuesta) => setState(respuesta.data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const editRestaurant = (idRestaurant) => {
    setIdRestaurant(idRestaurant);
    navigate("/Restaurant");
  };
  
  const openRestaurant = (id) =>{
    setId(id)
    setRestaurant(true)
  }


  useEffect(()=>{
    setState(restaurantFound)
  },[restaurantFound])

  useEffect(() => {
    RestaurantList();
    zonesData();
  }, []);

  const searchByZone = () => {
    fetch(`http://localhost:8080/zone/${zoneSelect.current.value}/restaurants`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((respuesta) => setState(respuesta.data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="container-filter">
        <p>Buscar por zona: </p>
        <select className="input-8" name="zona" ref={zoneSelect}>
          <option value="default">-Seleccione su zona-</option>
          {zone.map((item) => (
            <option value={item.id}>{item.name}</option>
          ))}
        </select>
        <button  className='buscar' onClick={searchByZone}>buscar</button>
      </div>
      <div className="conteiner-list">
        <div className="list-restaurants">
          <div className="cards-restaurants">
          {state.map((restaurante) => (
            <div
              className="card-restaurant"
             onClick={() => openRestaurant(restaurante.id)}
            >
              <div className="img-restaurant">
                <img src={restaurante.image[1].fileUrl} alt="" />
              </div>
              <div className="name-restaurant">
                <p>{restaurante.name}</p>
              </div>
              <div className="ranked-restaurant"></div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantSearch;
