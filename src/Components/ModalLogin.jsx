import Modal from "../Conteiners/Modal";
import "../assets/Styles/ModalLogin.css";
import Cancel from "../assets/Img/cancel.svg";


function ModalLogin({setLogin}) {
  return (
    <Modal>
      <div className="cancel-button-user">
        <img src={Cancel} alt="" onClick={() => setLogin(false)} />
      </div>
      <div className="login-modal">
      <form>
        <div className="login-conteiner">
        <p>Email:</p>
        <input type="text" name="" id="" />
        <p>Password</p>
        <input type="password" name="" id="" />
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
