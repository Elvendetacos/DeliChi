import React from "react";
import "../assets/Styles/ReservationCeo.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AddReservation from './AddReservation';

const Modal = ({ open, onClose, idUser }) => {
  const [reservations, setReservations] = useState([]);

  const handleChange = (event) => {
    setReservations({
      ...reservations,
      [event.target.name]: event.target.value,
    });
  };
  useEffect(() => {
    fetch(`http://localhost:8080/user/reservations/${idUser}`, {
      method: "GET",
      headers: {
        Accept: "aplication/json",
        "Content-Type": "Aplication/json",
        "Access-Control-Allow-Origin": "*",
      },
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((respuesta) => setReservations(respuesta.data))
      .catch((error) => {
        console.error("Error:", error);
      });
  },);

  const [reser, setReser] = useState({});

  const edit = (item)  =>{
    setReser(item)
    setModal(true);
}

  const [modal, setModal] = useState(false)
  return (
    <>
        { 
            modal && 
                <AddReservation reser={reser} setModal={setModal} idUser={idUser}/>
        }
    <div className="overlay">
      <div className="modalContainer">
        <div className="modalRight ">
          <p onClick={onClose} className="closeBtn">
            X
          </p>
          <div className="content">
            <h3>REGISTRO DE RESERVACIONES</h3>
            <h4>presiona para editar</h4>
            <div className="reservacion">
              <div className="rc">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Hora</th>
                      <th>Fecha</th>
                      <th>Cantidad de Personas</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-dividier">
                    {reservations.map((item) => (
                      <tr onClick={()=>edit(item)}>
                        <th>
                          {item.hour}
                        </th>
                        <th>
                          {item.date}
                        </th>
                        <th>
                          {item.people}
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <button onClick={onClose}>aceptar</button>
        </div>
      </div>
    </div>
    </>
  );
};
export default Modal;
