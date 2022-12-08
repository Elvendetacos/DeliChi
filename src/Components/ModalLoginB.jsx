import "../assets/Styles/ModalBusiness.css";
import Cancel from "../assets/Img/cancel.svg";
import { useRef, useContext } from "react";
import {useNavigate} from 'react-router-dom'
import ContextoTokenCeo from "../Contextos/ContextoTokenCeo";
import Swal from "sweetalert2";

function ModalLoginB({estado,  cambiarEstado, ids, cambiarid}) {

  const password = useRef(null);
  const email = useRef(null);
  let navigate = useNavigate();
  const { setTokenCeo } = useContext(ContextoTokenCeo)

    const handleSubmit = (event) => {
      event.preventDefault();
      const correo = (email.current.value);
      const contrasena=(password.current.value);

      fetch(`http://localhost:8080/ceo/login`, {
          method: "POST", 
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
          },
          body:JSON.stringify({
            email: correo,
            password: contrasena
          }),
      })
          .then((response) => {return response.json()})
          .then((respuesta =>{
            const respuestas=(respuesta.success);
            //console.log(respuesta.data)
            setTokenCeo(respuesta.data.token);
            const idx = (respuesta.data.id);
              validacion(respuestas, idx);
          }))
          .catch((error) => {
              console.error('Error:', error);
          });
  }

  function validacion(respuestas, idx) {
      if (respuestas == true) {
          cambiarid(idx);
          navigate('/list');
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido',
            showConfirmButton: false,
            timer: 1500
          })
      }else {
          console.log(passwordLogin)
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Contraseña o correo no ",
            showConfirmButton: false,
            timer: 1500,
          })
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
