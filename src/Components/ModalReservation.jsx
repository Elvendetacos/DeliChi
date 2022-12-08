import React from "react";
import "../assets/Styles/ReservationCeo.css";

import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import AddReservation from "./AddReservation";
import ContextoTokenCeo from "../Contextos/ContextoTokenCeo";

const Modal = ({ open, onClose, idUser }) => {
  const [reservations, setReservations] = useState([]);
  const { tokenCeo } = useContext(ContextoTokenCeo)
  const handleChange = (event) => {
    setReservations({
      ...reservations,
      [event.target.name]: event.target.value,
    });
  };
  useEffect(() => {
    fetch(`http://localhost:8080/user/reservations/${idUser.id}`, {
      method: "GET",
      headers: {
        'Authorization': tokenCeo,
        Accept: "application/json",
        "Content-Type": "Application/json",
        "Access-Control-Allow-Origin": "*",
      },
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
    })
      .then((response) => {
        return response.json();
      })
      .then((respuesta) => setReservations(respuesta.data))
      .catch((error) => {
        console.error("Error:", error);
      });
  });

  const [reser, setReser] = useState({});

  const edit = (item) =>{
    setReser(item);
    setModal(true);
};

  const [modal, setModal] = useState(false);
  return (
    <>
      {modal && (
        <AddReservation reser={reser} setModal={setModal} idUser={idUser} />
      )}
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
                        <tr onClick={() => edit(item)}>
                          <td>{item.hour}</td>
                          <td>{item.date}</td>
                          <td>{item.people}</td>
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
