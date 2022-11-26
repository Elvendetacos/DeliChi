import Modal from "../Conteiners/Modal";
import "../assets/Styles/ModalEstablecimiento.css";
import { useState, useRef, useEffect } from "react";

function ModalEstablecimiento({setEstabModal,
  setCapacityTable,
  setNumberTable, mesa, person, setMesa, setPerson, capacityTable, numberTable
}) {

  const Table = useRef(null);
  const People = useRef(null);

  const handleChange = (event) => {
    if("table" == event.target.name ){
      if(mesa === event.target.value ){
        setMesa(mesa)
      }else if(person == event.target.name){
        setPerson(person)
      }
    }
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    setNumberTable(Table.current.value);
    setCapacityTable(People.current.value);
    salir()
  }


  useEffect(()=>{
    if(capacityTable == null){
      Table.current.value = mesa
      People.current.value = person 
    }else{
      setMesa(numberTable)
      setPerson(capacityTable)
      Table.current.value = mesa
      People.current.value = person 
    }
  })

  const salir = () =>{
    setEstabModal(false)
  }

  return (
    <Modal>
      <form className="formEstablecimiento" onSubmit={handleSubmit}>
        <div className="establecimiento-modal">
          <div className="input-establecimiento">
            <p>Numero de mesas: </p>
            <input type="number" onChange={handleChange} name="table" contentEditable="true" min="1" id="" ref={Table} />
            <p>Numero de personas: </p>
            <input type="number" onChange={handleChange} name="people" contentEditable="true" min="1" id="" ref={People} />
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
