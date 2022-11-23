import Modal from "../Conteiners/Modal";
import "../assets/Styles/ModalEstablecimiento.css";
import { useState, useRef } from "react";

function ModalEstablecimiento({
  setEstabModal,
  setCapacityTable,
  setNumberTable,
}) {

  const Table = useRef(null);
  const People = useRef(null);

  const handleSubmit = (event) =>{
    event.preventDefault();
    setNumberTable(Table.current.value);
    setCapacityTable(People.current.value);
    salir()
  }

  const salir = () =>{
    setEstabModal(false)
  }

  return (
    <Modal>
      <form className="formEstablecimiento" onSubmit={handleSubmit}>
        <div className="establecimiento-modal">
          <div className="input-establecimiento">
            <p>Numero de mesas: </p>
            <input type="number" id="" ref={Table} />
            <p>Numero de personas: </p>
            <input type="number" id="" ref={People} />
          </div>
        </div>
        <div className="options-establecimiento">
          <button>Aceptar</button>
        </div>
      </form>
    </Modal>
  );
}

export default ModalEstablecimiento;
