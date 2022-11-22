import "../assets/Styles/ModalHorario.css";
import { useState } from "react";
import Modal from "../Conteiners/Modal";

function ModalHorario({ setHorarioModal }) {
  const [lunes, setLunes] = useState(false);
  const [martes, setMartes] = useState(false);
  const [miercoles, setMiercoles] = useState(false);
  const [jueves, setJueves] = useState(false);
  const [viernes, setViernes] = useState(false);
  const [sabado, setSabado] = useState(false);
  const [domingo, setdomingo] = useState(false);

  const handleChange = (event) => {
    const estado = event.target.value;
    console.log(estado);
    switch (estado) {
      case "1":
        setLunes(true);
        break;
      case "2":
        setMartes(true);
        break;
      case "3":
        setMiercoles(true);
        break;
      case "4":
        setJueves(true);
        break;
      case "5":
        setViernes(true);
        break;
      case "6":
        setSabado(true);
        break;
      case "7":
        setdomingo(true);
        break;
    }
  };

  const Horas = [
    {
      hora: "08:00",
      id: "08:00",
    },
    {
      hora: "09:00",
      id: "09:00",
    },
    {
      hora: "10:00",
      id: "10:00",
    },
    {
      hora: "11:00",
      id: "11:00",
    },
    {
      hora: "12:00",
      id: "12:00",
    },
    {
      hora: "13:00",
      id: "13:00",
    },
    {
      hora: "14:00",
      id: "14:00",
    },
    {
      hora: "15:00",
      id: "15:00",
    },
    {
      hora: "16:00",
      id: "16:00",
    },
    {
      hora: "17:00",
      id: "8:00",
    },
    {
      hora: "18:00",
      id: "18:00",
    },
    {
      hora: "19:00",
      id: "19:00",
    },
    {
      hora: "20:00",
      id: "20:00",
    },
    {
      hora: "21:00",
      id: "21:00",
    },
    {
      hora: "22:00",
      id: "22:00",
    },
    {
      hora: "23:00",
      id: "23:00",
    },
    {
      hora: "24:00",
      id: "24:00",
    },
  ];

  return (
    <>
      <Modal>
        <div className="horario">
          <label>Lunes: </label>
          <select onChange={handleChange}>
            {Horas.map((item) => (
              <option value={item.id} disabled={lunes}>
                {item.hora}
              </option>
            ))}
          <option value="1">Cerrado</option>
          </select>{" "}
          <p>a</p>
          <select>
            {Horas.map((item) => (
              <option value={item.id} disabled={lunes}>
                {item.hora}
              </option>
            ))}
          </select>
          <label>Martes: </label>
          <select  onChange={handleChange}>
            {Horas.map((item) => (
              <option value={item.id} disabled={martes}>
                {item.hora}
              </option>
            ))}
          <option value="2">Cerrado</option>
          </select>{" "}
          <p>a</p>
          <select>
            {Horas.map((item) => (
              <option value={item.id} disabled={martes}>
                {item.hora}
              </option>
            ))}
          </select>
          <label>Miercoles: </label>
          <select  onChange={handleChange}>
            {Horas.map((item) => (
              <option value={item.id} disabled={miercoles}>
                {item.hora}
              </option>
            ))}
            <option value="3">Cerrado</option>
          </select>{" "}
          <p>a</p>
          <select>
            {Horas.map((item) => (
              <option value={item.id} disabled={miercoles}>
                {item.hora}
              </option>
            ))}
          </select>
          <label>Jueves: </label>
          <select  onChange={handleChange}>
            {Horas.map((item) => (
              <option value={item.id} disabled={jueves}>
                {item.hora}
              </option>
            ))}
             <option value="4">Cerrado</option>
          </select>{" "}
          <p>a</p>
          <select>
            {Horas.map((item) => (
              <option value={item.id} disabled={jueves}>
                {item.hora}
              </option>
            ))}
          </select>
          <label>Viernes: </label>
          <select   onChange={handleChange}>
            {Horas.map((item) => (
              <option value={item.id} disabled={viernes}>
                {item.hora}
              </option>
            ))}
            <option value="5">Cerrado</option>
          </select>{" "}
          <p>a</p>
          <select>
            {Horas.map((item) => (
              <option value={item.id} disabled={viernes}>
                {item.hora}
              </option>
            ))}
          </select>
          <label>Sabado: </label>
          <select  onChange={handleChange}>
            {Horas.map((item) => (
              <option value={item.id} disabled={sabado}>
                {item.hora}
              </option>
            ))}
            <option value="6">Cerrado</option>
          </select>{" "}
          <p>a</p>
          <select>
            {Horas.map((item) => (
              <option value={item.id} disabled={sabado}>
                {item.hora}
              </option>
            ))}
          </select>
          <label>Domingo: </label>
          <select  onChange={handleChange}>
            {Horas.map((item) => (
              <option value={item.id} disabled={domingo}>
                {item.hora}
              </option>
            ))}
            <option value="7">Cerrado</option>
          </select>{" "}
          <p>a</p>
          <select>
            {Horas.map((item) => (
              <option value={item.id} disabled={domingo}>
                {item.hora}
              </option>
            ))}
          </select>
        </div>
        <div className="acept-button">
          <button onClick={() => setHorarioModal(false)}>Acceptar</button>
        </div>
      </Modal>
    </>
  );
}

export default ModalHorario;
