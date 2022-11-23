import "../assets/Styles/ListR.css";
import Add from "../assets/Img/ADDcircle.svg";
import CardList from "../Cards/CardList";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Contexto from "../Contextos/ContextoCeo";
import Rafa from "../assets/Img/rafa.jpg";

function FromListRegister() {
  const [state, setState] = useState([]);

  const navigate = useNavigate();

  const { id } = useContext(Contexto);

  const RestaurantList = () => {
    fetch(`http://localhost:8080/ceo/${id}/restaurants`, {
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
      .then((respuesta) => setState(respuesta.data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const mover = () => {
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
                <div className="cardR">
                  <img src={Rafa} alt="" />
                  <p>{item.name}</p>
                  <p>{item.zone}</p>
                </div>
              ))}
            <div className="add-restaurant" onClick={mover}>
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
