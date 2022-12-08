import Modal from "../Conteiners/Modal";
import "../assets/Styles/ModalLogin.css";
import Cancel from "../assets/Img/cancel.svg";
import { useRef, useContext } from "react";
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'
import ContextoTokenCeo from "../Contextos/ContextoTokenCeo";


function ModalLogin({setRegisters, setInicio, setView, setCerrar, setLogin, setIdUser, setUsuarios, setText}) {

  const password = useRef(null);
  const email = useRef(null);
  const { setTokenCeo } = useContext(ContextoTokenCeo)

    const handleSubmit = (event) => {
      event.preventDefault();
      const correo = (email.current.value);
      const contrasena=(password.current.value);

      fetch(`http://localhost:8080/user/login`, {
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
              const info=(respuesta.data);
              const success=(respuesta.success);
              console.log(respuesta.data.token)
              setTokenCeo(respuesta.data.token);
              validacion(contrasena, info ,success)
          }))
          .catch((error) => {
              console.error('Error:', error);
          });
          setLogin(false)
  }

  function validacion(passwordLogin, info, success) {
      if (success) {
          setIdUser(info)
          console.log(passwordLogin)
          setUsuarios(true)
          setText(false)
          setRegisters(false)
          setInicio(false)
          setView(true)
          setCerrar(true)
          Swal.fire({
            position: "top",
            title: 'Bienvenido ' + info.name + ' :D',
            showConfirmButton: false,
            timer: 1500
          })
      } else {
          console.log(passwordLogin)
          alert("No Registrado")
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
