import "../assets/Styles/Home.css";
import '../assets/Styles/Star.css'
import Rafa from "../assets/Img/rafa.jpg"
import Chiapa from "../assets/Img/Chiapa.jpg";
import Tuxtla from "../assets/Img/Tuxtla.jpg";
import Suchiapa from "../assets/Img/suchiapa.jpg";
import Comitan from "../assets/Img/comitan.jpg";
import Img1 from "../assets/Img/placeholder1.jpg";
import Img2 from "../assets/Img/placeholder2.jpg";
import Img3 from "../assets/Img/placeholder3.jpg";
import Img4 from "../assets/Img/placeholder4.jpg";
import {FaStar} from 'react-icons/fa'
import { useEffect, useState, useRef} from "react";
import { useNavigate } from "react-router-dom";

function FromHome({ setRestaurant , setId}) {

  const navigate = useNavigate();
  const [zone, setZone] = useState([])
  const [zoneName, setZoneName] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:8080/zone/3/restaurants/`, {
      method: "GET",
      mode: 'cors',
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
      method: "GET",
      mode: 'cors',
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


  const page = () => {
    navigate("/Restaurants");
  };
  const [rating,setRating] = useState(false);
  const [hover, setHover] = useState(false);
 
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
        <button onClick={page}>ver mas</button>
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
              {/* <div className='resena'>
                    <p><b>Reseña</b></p>
                    <div>
                    {[...Array(5)].map((star, i)=>{
                      const ratingValue = i +1;
                        return(
                          //en reseña se cambi por lo  dela api y cambiar los ratingValue por ejeplo imt.user.name
                     // {reseña.map((item)=>(
                       <label>
                      
                        <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)}
                        />
                        <FaStar className='star' color={ratingValue  <= (hover || rating) ? "#FFFF00" : "FFFFF"} 
                        size={30} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={()=> setHover(null)}
                        />
                    </label>
                     // ))}
                     
                );
            })}
                 </div>
                </div> */}
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
