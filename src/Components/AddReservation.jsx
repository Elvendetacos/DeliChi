import "../assets/Styles/AddReservation.css";
import { useEffect, useState } from "react";

function AddReservation({setModal}) {
    var today = new Date();
    const [state, setState] = useState()
    const [dataValue, setDataValue] = useState()

    const obtenerHora = () =>{
        const dia1 = dataValue;
        console.log(dia1)
        const dia2 = state;
        console.log(dia2)
        if(dia1 === dia2){
            console.log("hola 1")
        }else{
            console.log("no hola")
        }
    } 

    const handleChange = (event) =>{
        setDataValue(event.target.value)
    }

    const obtenerFecha = () => {
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    setState(`${year}-${month}-${day}`);
  };

  useEffect(() => {
    obtenerFecha();
  });

  return (
    <>
      <div className="font-reservation">
        <div className="modal-reservation">
            <form action="">
            <div className="reservation">
            <p>Cantidad de personas:</p>
          <input type="number" placeholder="Cantidad de personas"/>
          <p>Hora:</p>
          <select>
            <option>08:00</option>
            <option>08:30</option>
            <option>09:00</option>
            <option>09:30</option>
            <option>10:00</option>
            <option>10:30</option>
            <option>11:00</option>
            <option>11:30</option>
            <option>12:00</option>
            <option>12:30</option>
            <option>13:00</option>
            <option>13:30</option>
            <option>14:00</option>
            <option>14:30</option>
            <option>15:00</option>
            <option>15:30</option>
            <option>16:00</option>
            <option>16:30</option>
            <option>17:00</option>
            <option>17:30</option>
            <option>18:00</option>
            <option>18:30</option>
            <option>19:00</option>
            <option>19:30</option>
            <option>20:00</option>
            <option>20:30</option>
            <option>21:00</option>
            <option>21:30</option>
            <option>22:00</option>
            <option>22:30</option>
            <option>23:00</option>
            <option>23:30</option>
          </select>
          <p>Fecha:</p>
          <input type="date" min={state} max="2025-01-01" onkeydown="return false" onChange={handleChange}/>
            </div>
            <div className="button-actions">
                <button type="button" onClick={()=>setModal(false)}>Cancelar</button>
                <button type="submit">Aceptar</button>
            </div>
            </form>
        </div>
      </div>
    </>
  );
}

export default AddReservation;
