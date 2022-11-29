import "../assets/Styles/ListR.css";
import { useEffect, useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Contexto from "../Contextos/ContextoCeo";
import Rafa from "../assets/Img/rafa.jpg";

function RestaurantSearch({setRestaurant, setId }) {
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
  useEffect(() => {
    RestaurantList();
    zonesData();
  }, []);

  const searchByZone = () => {
    fetch(`http://localhost:8080/zone/${zoneSelect.current.value}/restaurants/`, {
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
      <div class="container-filter">
        <p>Buscar por zona: </p>
        <select className="input-8" name="zona" ref={zoneSelect}>
          <option value="default">-Seleccione su zona-</option>
          {zone.map((item) => (
            <option value={item.id}>{item.name}</option>
          ))}
        </select>
        <button onClick={searchByZone}>buscar</button>
      </div>
      <div className="conteiner-list">
        <div className="list-restaurants">
          <div className="cards-restaurants">
            {state.map((item) => (
              <div className="cardR" onClick={() => openRestaurant(item.id)}>
                <img src={Rafa} alt="" />
                <p>{item.name}</p>
                <p>{item.zone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantSearch;
