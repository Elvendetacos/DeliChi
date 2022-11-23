import "../assets/Styles/ModalHorario.css";
import { useEffect, useState } from "react";
import Modal from "../Conteiners/Modal";
import { useRef } from "react";

function ModalHorario({ setHorarioModal, hora, setHora }) {
  const [lunes, setLunes] = useState(false);
  const [martes, setMartes] = useState(false);
  const [miercoles, setMiercoles] = useState(false);
  const [jueves, setJueves] = useState(false);
  const [viernes, setViernes] = useState(false);
  const [sabado, setSabado] = useState(false);
  const [domingo, setdomingo] = useState(false);

  const cadenaxd = () => {
    let array = new Array();
    array = [
      horaLunes,
      horaMartes,
      horaMiercoles,
      horaJueves,
      horaViernes,
      horaSabado,
      horaDomingo,
    ];
    let array2 = new Array();
    array2 = [
      horaLunes2,
      horaMartes2,
      horaMiercoles2,
      horaJueves2,
      horaViernes2,
      horaSabado2,
      horaDomingo2,
    ];
    for (let i = 0; i < array.length; i++) {
      if (
        array[i].current.value === "cerrado" ||
        array2[i].current.value === "cerrado"
      ) {
        array2[i].current.value = "cerrado";
        array[i].current.value = "cerrado";
      } else {
        console.log("na' de na'");
      }
    }
    console.log(horaLunes.current.value);
    console.log(horaLunes2.current.value);
  };

  const handlesubmit = (e) => {
    cadenaxd();
    e.preventDefault();

    const Liz =         
    horaLunes.current.value +
    "-" +
    horaLunes2.current.value +
    "," +
    horaMartes.current.value +
    "-" +
    horaMartes2.current.value +
    "," +
    horaMiercoles.current.value +
    "-" +
    horaMiercoles2.current.value +
    "," +
    horaJueves.current.value +
    "-" +
    horaJueves2.current.value +
    "," +
    horaViernes.current.value +
    "-" +
    horaViernes2.current.value +
    "," +
    horaSabado.current.value +
    "-" +
    horaSabado2.current.value +
    "," +
    horaDomingo.current.value +
    "-" +
    horaDomingo2.current.value;
    
    setHora(Liz)
    setHorarioModal(false)
  };

  useEffect(() => {}, []);

  const horaLunes = useRef();
  const horaLunes2 = useRef();
  const horaMartes = useRef();
  const horaMartes2 = useRef();
  const horaMiercoles = useRef();
  const horaMiercoles2 = useRef();
  const horaJueves = useRef();
  const horaJueves2 = useRef();
  const horaViernes = useRef();
  const horaViernes2 = useRef();
  const horaSabado = useRef();
  const horaSabado2 = useRef();
  const horaDomingo = useRef();
  const horaDomingo2 = useRef();

  const handleChange = (event) => {
    const estado = event.target.value;
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
  ];

  return (
    <>
      <Modal>
        <form className="poder" onSubmit={handlesubmit}>
          <div className="horario">
            <label>Lunes: </label>
            <select onChange={handleChange} ref={horaLunes}>
              {Horas.map((item) => (
                <option value={item.id} disabled={lunes}>
                  {item.hora}
                </option>
              ))}
              <option value="cerrado">Cerrado</option>
            </select>{" "}
            <p>a</p>
            <select ref={horaLunes2}>
              {Horas.map((item) => (
                <option value={item.id} disabled={lunes}>
                  {item.hora}
                </option>
              ))}
              <option value="cerrado">Cerrado</option>
            </select>
            <label>Martes: </label>
            <select onChange={handleChange} ref={horaMartes}>
              {Horas.map((item) => (
                <option value={item.id} disabled={martes}>
                  {item.hora}
                </option>
              ))}
              <option value="cerrado">Cerrado</option>
            </select>{" "}
            <p>a</p>
            <select ref={horaMartes2}>
              {Horas.map((item) => (
                <option value={item.id} disabled={martes}>
                  {item.hora}
                </option>
              ))}
              <option value="cerrado">Cerrado</option>
            </select>
            <label>Miercoles: </label>
            <select onChange={handleChange} ref={horaMiercoles}>
              {Horas.map((item) => (
                <option value={item.id} disabled={miercoles}>
                  {item.hora}
                </option>
              ))}
              <option value="cerrado">Cerrado</option>
            </select>{" "}
            <p>a</p>
            <select ref={horaMiercoles2}>
              {Horas.map((item) => (
                <option value={item.id} disabled={miercoles}>
                  {item.hora}
                </option>
              ))}
              <option value="cerrado">Cerrado</option>
            </select>
            <label>Jueves: </label>
            <select onChange={handleChange} ref={horaJueves}>
              {Horas.map((item) => (
                <option value={item.id} disabled={jueves}>
                  {item.hora}
                </option>
              ))}
              <option value="cerrado">Cerrado</option>
            </select>{" "}
            <p>a</p>
            <select ref={horaJueves2}>
              {Horas.map((item) => (
                <option value={item.id} disabled={jueves}>
                  {item.hora}
                </option>
              ))}
              <option value="cerrado">Cerrado</option>
            </select>
            <label>Viernes: </label>
            <select onChange={handleChange} ref={horaViernes}>
              {Horas.map((item) => (
                <option value={item.id} disabled={viernes}>
                  {item.hora}
                </option>
              ))}
              <option value="cerrado">Cerrado</option>
            </select>{" "}
            <p>a</p>
            <select ref={horaViernes2}>
              {Horas.map((item) => (
                <option value={item.id} disabled={viernes}>
                  {item.hora}
                </option>
              ))}
              <option value="cerrado">Cerrado</option>
            </select>
            <label>Sabado: </label>
            <select onChange={handleChange} ref={horaSabado}>
              {Horas.map((item) => (
                <option value={item.id} disabled={sabado}>
                  {item.hora}
                </option>
              ))}
              <option value="cerrado">Cerrado</option>
            </select>{" "}
            <p>a</p>
            <select ref={horaSabado2}>
              {Horas.map((item) => (
                <option value={item.id} disabled={sabado}>
                  {item.hora}
                </option>
              ))}
              <option value="cerrado">Cerrado</option>
            </select>
            <label>Domingo: </label>
            <select onChange={handleChange} ref={horaDomingo}>
              {Horas.map((item) => (
                <option value={item.id} disabled={domingo}>
                  {item.hora}
                </option>
              ))}
              <option value="cerrado">Cerrado</option>
            </select>{" "}
            <p>a</p>
            <select ref={horaDomingo2}>
              {Horas.map((item) => (
                <option value={item.id} disabled={domingo}>
                  {item.hora}
                </option>
              ))}
              <option value="cerrado">Cerrado</option>
            </select>
          </div>
          <div className="acept-button">
            <button>Acceptar</button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default ModalHorario;
