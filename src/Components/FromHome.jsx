import "../assets/Styles/Home.css";
import "../assets/Styles/Star.css";
import Rafa from "../assets/Img/rafa.jpg";
import Chiapa from "../assets/Img/Chiapa.jpg";
import Tuxtla from "../assets/Img/Tuxtla.jpg";
import Suchiapa from "../assets/Img/suchiapa.jpg";
import Comitan from "../assets/Img/comitan.jpg";
import Img1 from "../assets/Img/placeholder1.jpg";
import Img2 from "../assets/Img/placeholder2.jpg";
import Img3 from "../assets/Img/placeholder3.jpg";
import Img4 from "../assets/Img/placeholder4.jpg";
import { FaStar } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function FromHome({ setRestaurant, setId }) {
  const navigate = useNavigate();

  const sliders = useRef(null);

  const Siguiente = () => {
    if (sliders.current.children.length > 0) {
      const primerElemento = sliders.current.children[0];
      const tamañoSlide = sliders.current.children[0].offsetWidth;
      sliders.current.style.transition = `all 0.3s ease-out 0s`;
      sliders.current.style.transform = `translateX(-${tamañoSlide}px)`;

      const transition = () => {
        sliders.current.style.transition = "none";
        sliders.current.style.transform = `translateX(0)`;
        sliders.current.appendChild(primerElemento);
        sliders.current.removeEventListener("transitionend", transition);
      };

      sliders.current.addEventListener("transitionend", transition);
    }
  };

  const Atras = () => {
    if (sliders.current.children.length > 0) {
      const index = sliders.current.children.length - 1;
      const ultimoElemento = sliders.current.children[index];
      sliders.current.insertBefore(ultimoElemento, sliders.current.firstChild);

      const tamañoSlide = sliders.current.children[0].offsetWidth;

      sliders.current.style.transition = "none";
      sliders.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        sliders.current.style.transition = `all 0.3s ease-out 0s`;
        sliders.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  // Para obtener restaurantes de la zona (object)
  const [zone, setZone] = useState([]);

  // Para obtener nombre de zona
  const [zoneName, setZoneName] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/zone/2/restaurants`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        /* "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Origin": "*",*/
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((respuesta) => {
        setZone(respuesta.data), console.log(respuesta.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    //for del tamaño del arreglo que te regresa ekl fetch de arriba
    // agregas el id del restaurant al fetch que te extrae los comments
    // lo agregas a un estado de comment.score y eso ya es un arreglo de scores
    // investiga hay un metodo que te da el numero que mas se repite en un arreglo
    //y eso lo pintas

    // Fetch para obtener nombre de la zona
    Fetch2();

    const intervalo = setInterval(() => {
      Siguiente();
    }, 4000);

    sliders.current.addEventListener("mouseenter", () => {
      clearInterval(intervalo);
    });
  }, [1]);

/*const ff = () => {
  sliders.current.style.width=``
}*/

  const Fetch2 = () => {
    fetch(`http://localhost:8080/zone/2`, {
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
        setZoneName(respuesta.data), console.log(respuesta.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const Resta = (id) => {
    setId(id);
    setRestaurant(true);
  };

  const slider = [
    {
      Img: Img1,
    },
    {
      Img: Img2,
    },
    {
      Img: Img3,
    },
    {
      Img: Img4,
    },
  ];

  const Locality = [
    {
      Name: "Chiapa de Corzo",
      IMG: Chiapa,
    },
    {
      Name: "Comitan",
      IMG: Comitan,
    },
    {
      Name: "Suchiapa",
      IMG: Suchiapa,
    },
  ];

  const page = () => {
    navigate("/Restaurants");
  };

  const [rating, setRating] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <>
      <div className="slides-section">
        <div className="slider-conteiner" ref={sliders}>
          {zone.map((restaurante) => (
            <div className="slide-objects">
              <img src={restaurante.image[0].fileUrl} alt="" />
            </div>
          ))}
        </div>
        <div className="anterior">
          <p onClick={Atras}>&lt;</p>
        </div>
        <div className="siguiente">
          <p onClick={Siguiente}>&gt;</p>
        </div>
      </div>
      <div className="restaurants-section">
        <div className="restaurants-in">
          <p>Restaurantes en {zoneName.name}:</p>
        </div>

        <div className="conteiner-view-restaurants">
          {/**
           * El zone.map recorre todos los restaurantes ()
           */}
          {zone.map((restaurante) => (
            <div
              className="card-restaurant"
              onClick={() => Resta(restaurante.id)}
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
        <button className="vermas" onClick={page}>
          Ver más
        </button>
      </div>

      <div className="locality-section">
        <div className="municipios">
          <p>Municipios registrados:</p>
        </div>
        <div className="conteiner-view-localidad">
          {Locality.map((item) => (
            <div className="card-municipio">
              <div className="municipio-img">
                <img src={item.IMG} alt="" />
              </div>
              <div className="titulo-municipio">
                <p>{item.Name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FromHome;
