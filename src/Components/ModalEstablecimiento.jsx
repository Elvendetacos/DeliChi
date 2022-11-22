import Modal from "../Conteiners/Modal";
import "../assets/Styles/ModalEstablecimiento.css";

function ModalEstablecimiento({setEstabModal}) {
  return (
    <Modal>
      <div className="establecimiento-modal">
        <div className="input-establecimiento">
          <p>Numero de mesas: </p>
          <input type="number" name="" id="" />
          <p>Numero de personas: </p>
          <input type="number" name="" id="" />
        </div>
      </div>
      <div className="options-establecimiento">
        <button onClick={()=>setEstabModal(false)}>Aceptar</button>
      </div>
    </Modal>
  );
}

export default ModalEstablecimiento;
