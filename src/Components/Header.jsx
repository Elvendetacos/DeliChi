import Logo from "../assets/Img/CD.png";
import "../assets/Styles/Header.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import RestaurantFoundContext from "../Contextos/ContextoRestaurantFound";
import { useContext } from "react";
import User from '../Contextos/ContextoUser'

function Header({ search, text, usuarios }) {
  const navigate = useNavigate();
  const [restaurantResult, setRestaurantResult] = useState([]);
  const {restaurantFound, setRestaurantFound} = useContext(RestaurantFoundContext);
  const { idUser, setIdUser } = useContext(User)

  const redireccion = () => {
    navigate("/Register");
  };

  const toHome = () => {
    navigate("/");
  };

  useEffect(() => {
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
      .then((respuesta) => {
        setRestaurantResult(respuesta.data), console.log(respuesta.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleChange = (e) => {
    let arreglo = [];
    restaurantResult.forEach((rest) => {
      rest.name.toLowerCase().includes(e.target.value.toLowerCase())
        ? arreglo.push(rest)
        : console.log("");
    });
    setRestaurantFound(arreglo)
  };

  return (
    <header>
      <div className="conteiner-header">
        <div className="conteiner-Img">
          <img src={Logo} alt="" onClick={toHome} />
        </div>
        <div className="conteiner-Search">
          {search && (
              <input
                type="text"
                name=""
                onChange={handleChange}
                id=""/>
          )}
        </div>
        <div className="conteiner-Name">
          {text && <p onClick={redireccion}>Para empresas</p>}
          {usuarios && <p>{idUser.name}</p> }
        </div>
      </div>
    </header>
  );
}

export default Header;
