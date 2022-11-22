import "../assets/Styles/ModalBusiness.css";
import Cancel from "../assets/Img/cancel.svg";
import { useRef } from "react";
import {useNavigate} from 'react-router-dom'

function ModalLoginB({estado,  cambiarEstado, ids, cambiarid}) {

  const password = useRef(null);
  const email = useRef(null);
  let navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
      const correo = (email.current.value);
      const contrasena=(password.current.value);

      fetch(`http://localhost:8080/ceo/${correo}`, {
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
          .then((respuesta =>{
              const apiId=(respuesta.data.id);
              const apiPassword=(respuesta.data.password);
              validacion(contrasena, apiId, apiPassword)
          }))
          .catch((error) => {
              console.error('Error:', error);
          });
  }

  function validacion(passwordLogin, id1, apiPassword) {
      if (apiPassword == passwordLogin) {
          cambiarid(id1);
          navigate('/list');
          alert("si pasa")
      } else if (apiPassword != passwordLogin) {
          console.log(passwordLogin)
          alert("Contraseña no valida")
      }
  }
  

  return (
    <>
      <div className="back-modal-business">
        <div className="modal-business">
          <div className="cancel-model">
            <img src={Cancel} alt="" onClick={()=>cambiarEstado(!estado)}/>
          </div>
          <div className="model-datos">
            <form onSubmit={handleSubmit}>
            <p>Correo:</p>
            <input type="text" name="" id=""  className="correo-modal" ref={email}/>
            <p>Contraseña:</p>
            <input type="password" name="" id="" className="contra-modal" ref={password}/>
            <button className="submit-button">Iniciar Sesión</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalLoginB;
