import "../assets/Styles/ModalRegister.css";
import Cancel from "../assets/Img/cancel.svg";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function ModalRegister({setRegister}) {
  a = useNavigate()
  const slider = useRef(null);
  const form = useRef(null)
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    fetch("http://localhost:8080/user", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      email:formData.get("email"),
      name:formData.get("name"),
      lastName:formData.get("lastname"),
      phoneNumber:formData.get("phone"),
      password:formData.get("password")
        }),
      })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error('Error:', error);
      });
      setRegister(false)
  }

  const siguiente = () => {
    const primerElemento = slider.current.children[0];
    slider.current.style.transition = `all 0.5s cubic-bezier(0.6, -0.28, 0.74, 0.05) 0s`;
    slider.current.style.transform = `translateX(-50%)`;
  };

  const Atras = () => {
    if (slider.current.children.length > 0) {
      const ultimoElemento = slider.current.children[0];
      slider.current.style.transition = `all 0.5s cubic-bezier(0.6, -0.28, 0.74, 0.05)  0s`;
      slider.current.style.transform = `translateX(0%)`;
    }
  };

  return (
    <>
      <div className="back-register-user">
        <div className="front-register-user">
          <div className="cancel-button-user">
            <img src={Cancel} alt="" onClick={()=>setRegister(false) }/>
          </div>
          <form onSubmit={handleSubmit} ref={form}>
            <div className="slider-conteiner-user" ref={slider}>
              <div className="slider-section-1">
                <div className="data-register">
                  <div className="data-conteiner-1">
                    <p>Nombre: </p>
                    <input type="text" name="name"/>
                    <p>Apellido: </p>
                    <input type="text" name="lastname"/>
                    <p>Telefono: </p>
                    <input type="number" name="phone"/>
                  </div>
                </div>
                <div className="button-user">
                  <button type="button" onClick={siguiente}>
                    &gt;
                  </button>
                </div>
              </div>
              <div className="slider-section-1">
                <div className="data-register">
                  <div className="data-conteiner-1">
                    <p>Email: </p>
                    <input type="text" name="email"/>
                    <p>Password: </p>
                    <input type="password" name="password"/>
                  </div>
                </div>
                <div className="button-user-1">
                  <button type="button" onClick={Atras} className="atras">
                    &lt;
                  </button>
                  <button className="submit">Registrarse</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ModalRegister;
