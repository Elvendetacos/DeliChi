import Modal from "../Conteiners/Modal";
import "../assets/Styles/ModalEstablecimiento.css";
import { useState } from "react"
function ModalEstablecimiento({setEstabModal}) {

  const [numberTable, setNumberTable] = useState(null);
  const [capacityTable, setCapacityTable] = useState(null);
  return (
    <Modal>
      <div className="establecimiento-modal">
        <div className="input-establecimiento">
          <p>Numero de mesas: </p>
          <input type="number" name="numberTable" id="" />
          <p>Numero de personas: </p>
          <input type="number" name="capacityTable" id="" />
        </div>
      </div>
      <div className="options-establecimiento">
        <button onClick={()=>setEstabModal(false)}>Aceptar</button>
      </div>
    </Modal>
  );
}

export default ModalEstablecimiento;
