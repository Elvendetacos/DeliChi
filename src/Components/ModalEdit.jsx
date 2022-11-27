import React from 'react'
import "../assets/Styles/ReservationCeo.css"
import jiji from '../assets/img/xD.jpg'

import { Link } from "react-router-dom";
import axios from "axios";
//import React,{useEffect,useState} from "react";
import { useContext } from "react";
//import  ContextoR  from "../Contextos/ContextoR"


const url =  'http://localhost:8080/reservation/'
const  ReservationCeo = () => {
const {reservation} = useContext(ContextoR);}

const Modal = ({open,onClose}) => {

    if(!open)return null;

return(
    <div className="overlay">
      <div className="modalContainer">
      <img src={jiji} alt=''/>
      <div className="modalRight ">
      <p onClick={onClose} className="closeBtn">X</p>
      <div className="content">
      <h3>REGISTRO DE RESERVACIONES</h3>
        <div className="reservacion"> 
            <div className="rc">
            <table className="table">
            <thead>
              <tr>
                 <th>Nombre:</th>
                 <th>Apellido:</th>
                 <th>Hora:</th>
                 <th>Fecha:</th>
                 <th>Cantidad de Personas:</th>
               </tr>
            </thead>
            <tbody className="table-group-dividier">
             <tr>
              
             </tr>
            
            </tbody>
        </table>
        </div>
        </div>
      </div>
      <div className="btnContainer">
      <button className='btnPrimary'>
        <span className='bold'>perros</span>
      </button>
      <button className='btnOutline'>
        <span>xD</span>
      </button>
      </div>
      </div>
      </div>
  
    </div>
)
}
export default Modal