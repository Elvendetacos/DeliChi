import "../assets/Styles/Home.css";
import Rafa from "../assets/Img/rafa.jpg";
import Chiapa from "../assets/Img/Chiapa.jpg";
import Tuxtla from "../assets/Img/Tuxtla.jpg";
import Suchiapa from "../assets/Img/suchiapa.jpg";
import Comitan from "../assets/Img/comitan.jpg";
import Img1 from "../assets/Img/placeholder1.jpg";
import Img2 from "../assets/Img/placeholder2.jpg";
import Img3 from "../assets/Img/placeholder3.jpg";
import Img4 from "../assets/Img/placeholder4.jpg";
import { useEffect, useState} from "react";

function FromHome({ setRestaurant , setId}) {

  const [zone, setZone] = useState([])
  const [zoneName, setZoneName] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:8080/zone/3/restaurants/`, {
      method: "GET", headers: {
          Accept: "aplication/json",
          "Content-Type": "Aplication/json"
      }, mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
      },

  })
      .then((response) => {return response.json()})
      .then((respuesta => setZone(respuesta.data)))
      .catch((error) => {
          console.error('Error:', error);
      });
      Fetch2()
  }, [1])

  const Fetch2 = () =>{
    fetch(`http://localhost:8080/zone/3/`, {
      method: "GET", headers: {
          Accept: "aplication/json",
          "Content-Type": "Aplication/json"
      }, mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
      },

  })
      .then((response) => {return response.json()})
      .then((respuesta => setZoneName(respuesta.data)))
      .catch((error) => {
          console.error('Error:', error);
      });
  }

  const Resta = (id) =>{
    setId(id)
    setRestaurant(true)
  }

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
      Name: "Suchiapa",
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
 
  return (
    <>
      <div className="slides-section">
        <div className="slider-conteiner">
          <div className="anterior">
            <p>&lt;</p>
          </div>
          <div className="slider-bar"></div>
          <div className="siguiente">
            <p>&gt;</p>
          </div>
        </div>
      </div>
      <div className="restaurants-section">
        <div className="restaurants-in">
          <p>Restaurantes en {zoneName.name}:</p>
        </div>
        <div className="conteiner-view-restaurants">
          {zone.map((restaurante) => (
            <div
              className="card-restaurant"
              onClick={()=>Resta(restaurante.id)}
            >
              <div className="img-restaurant">
                <img src={Rafa} alt="" />
              </div>
              <div className="name-restaurant">
                <p>{restaurante.name}</p>
              </div>
              {/* Aqui es para las estrellas previzualizadas del restaurante */}
              <div className="ranked-restaurant"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="locality-section">
        <div className="municipios">
          <p>Municipios</p>
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
