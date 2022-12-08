import "../assets/Styles/ListR.css";
import Add from "../assets/Img/ADDcircle.svg";
import CardList from "../Cards/CardList";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Contexto from "../Contextos/ContextoCeo";
import Rafa from "../assets/Img/rafa.jpg";
import ContextoTokenCeo from "../Contextos/ContextoTokenCeo";

function FromListRegister({setEditar, setIdRestaurant}) {
  const [state, setState] = useState([]);

  const navigate = useNavigate();

  const { id } = useContext(Contexto);
  const { tokenCeo } = useContext(ContextoTokenCeo)
  //const token = tokenCeo.replace('Bearer ', '')

  const RestaurantList = () => {
    fetch(`http://localhost:8080/ceo/${id}/restaurants/u`, {
      method: "GET",
      headers: {
        'Authorization': tokenCeo,
        Accept: "application/json",
        "Content-Type": "Application/json",
      },
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
    })
      .then((response) => {
        return response.json();
      })
      .then((respuesta) => {setState(respuesta.data)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };



  const newRestaurant = () => {
    navigate("/Restaurant");
    setIdRestaurant(undefined);
  };

  const editRestaurant =  (idRestaurant) => {
    setIdRestaurant(idRestaurant)
    navigate("/Restaurant");
  };

  useEffect(() => {
    RestaurantList();
  });

  return (
    <>
      <div className="conteiner-list">
        <div className="list-restaurants">
          <div className="cards-restaurants">
          {state.map((item) => (
                <div className="cardR" onClick={()=>editRestaurant(item.id)}>
                  <img src={item.image[0].fileUrl} alt="" />
                  <p>{item.name}</p>
                  <p>{item.nameZone}</p>
                </div>
              ))}
            <div className="add-restaurant" onClick={newRestaurant}>
              <img src={Add} alt="" />
              
              <p>Agregar un restaurante</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FromListRegister;
