import "../assets/Styles/ModalBusiness.css";
import Cancel from "../assets/Img/cancel.svg";

function ModalLoginB({estado,  cambiarEstado}) {
  return (
    <>
      <div className="back-modal-business">
        <div className="modal-business">
          <div className="cancel-model">
            <img src={Cancel} alt="" onClick={()=>cambiarEstado(!estado)}/>
          </div>
          <div className="model-datos">
            <p>Correo:</p>
            <input type="text" name="" id=""  className="correo-modal"/>
            <p>Contraseña:</p>
            <input type="password" name="" id="" className="contra-modal"/>
            <button className="submit-button">Iniciar Sesión</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalLoginB;
