import React from 'react'
import "../assets/Styles/ReservationCeo.css"
import { Link } from "react-router-dom";
import axios from "axios";
import {useEffect,useState} from "react";
import { useContext } from "react";
//import  ContextoR  from "../Contextos/ContextoR"


const url =  'http://localhost:8080/reservation/'
const  ReservationCeo = () => {
const {reservation} = useContext(ContextoR);}

const Modal = ({open, reservacion, setOpenModal}) => {
    if(!open)return null;

return(
    <div className="overlay">
      <div className="modalContainer">
      <div className="modalRight ">
      <p onClick={() => setOpenModal(!open)} className="closeBtn">X</p>
      <div className="content">
      <h3>REGISTRO DE RESERVACIONES</h3>
        <div className="reservacion"> 
            <div className="rc">
            <table className="table">
            <thead>
              <tr>
                 <th>Nombre</th>
                 <th>Apellido</th>
                 <th>Hora</th>
                 <th>Fecha</th>
                 <th>Cantidad de Personas</th>
                 <th>Estado </th>
               </tr>
            </thead>
            <tbody className="reservations-item">
                {reservacion.map((item)=>(
                    <tr>
                        <th>{item.user.name}</th>
                        <th>{item.user.lastName}</th>
                        <th>{item.hour}</th>
                        <th>{item.date}</th>
                        <th>{item.people}</th>
                        <th>{item.status}</th>
                    </tr>
                ))}
            </tbody>
        </table>
        
        </div>    
        </div>
        <button className="acept-reservation" onClick={() => setOpenModal(!open)}>Aceptar</button>
      </div>
      </div>
      </div>
    </div>

)
}
export default Modal