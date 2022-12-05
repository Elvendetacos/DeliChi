import Logo from "../assets/Img/CD.png";
import "../assets/Styles/Header.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function Header({ search, text }) {
  const navigate = useNavigate();
  const [restaurantResult, setRestaurantResult] = useState([]);
  let restaurantFound = useRef([]);

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
    restaurantResult.forEach((rest) => {
      rest.name.toLowerCase().includes(e.target.value.toLowerCase())
        ? console.log(rest.name)
        : console.log("_______");
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault;
    restaurante = restaurantFound.current.values;
    // Mostrar card con los datos

    // Primer detalle que al agreagar una etiqueta form que englobe al input, se modifica el tamaño
    // horizontal del input (elementos comentados)
  };

  return (
    <header>
      <div className="conteiner-header">
        <div className="conteiner-Img">
          <img src={Logo} alt="" onClick={toHome} />
        </div>
        <div className="conteiner-Search">
          {search && (
            //<form onSubmit={handleSubmit}>
              <input
                type="text"
                name=""
                ref={restaurantFound}
                onChange={handleChange}
                id=""
              />
            //</form>
          )}
        </div>
        <div className="conteiner-Name">
          {text && <p onClick={redireccion}>Para empresas</p>}
        </div>
      </div>
    </header>
  );
}

export default Header;
