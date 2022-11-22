import Modal from "../Conteiners/Modal";
import "../assets/Styles/ModalLogin.css";
import Cancel from "../assets/Img/cancel.svg";
import { useRef } from "react";
import { useNavigate } from 'react-router';


function ModalLogin({setLogin}) {

  const password = useRef(null);
  const email = useRef(null);

    const handleSubmit = (event) => {
      event.preventDefault();
      const correo = (email.current.value);
      const contrasena=(password.current.value);

      fetch(`http://localhost:8080/user/${correo}`, {
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
              console.log(respuesta.data)
              validacion(contrasena, apiPassword)
          }))
          .catch((error) => {
              console.error('Error:', error);
          });
  }

  function validacion(passwordLogin, apiPassword) {
      if (apiPassword == passwordLogin) {
          //cambiarid(id1);
          console.log(passwordLogin)
          alert("si pasa")
      } else if (apiPassword != passwordLogin) {
          console.log(passwordLogin)
          alert("Contraseña no valida")
      }
  }

  return (
    <Modal>
      <div className="cancel-button-user">
        <img src={Cancel} alt="" onClick={() => setLogin(false)} />
      </div>
      <div className="login-modal">
      <form onSubmit={handleSubmit}>
        <div className="login-conteiner">
        <p>Email:</p>
        <input type="text" name="email" id="" ref={email}/>
        <p>Password</p>
        <input type="password" name="password" id="" ref={password}/>
        </div>
        <div className="buton-login">
            <button>Aceptar</button>
        </div>
        </form>
      </div>
    </Modal>
  );
}

export default ModalLogin;
