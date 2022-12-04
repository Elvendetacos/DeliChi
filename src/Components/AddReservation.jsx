import "../assets/Styles/AddReservation.css";
import { useEffect, useState, useRef } from "react";
import Swal from "sweetalert2";

function AddReservation({setModal, idUser, idRestaurant, reser}) {
    var today = new Date();
    const [state, setState] = useState()
    const [dataValue, setDataValue] = useState()
    const hora = useRef(null)
    const form = useRef(null)
    const date = useRef(null)
    const peopleR = useRef(null)
    const [hour, setHour] = useState()
    const [people, setPeople] = useState()
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(form.current);
  
    if(reser === undefined){
      console.log(hora.current.value);
      console.log(dataValue);
      console.log(formData.get("people"));
      fetch(`http://localhost:8080/reservation/user/${idUser}/restaurant/${idRestaurant}`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date:dataValue,
        people:formData.get("people"),
        hour:hora.current.value
        }),
    })
    .then((response) => response.json())
    .then((data) => (data))
    .then(() => Swal.fire({
      icon: 'success',
      title: 'Reservacion exitosa',
      showConfirmButton: false,
      timer: 1500
    }))
    .catch((error) => {
      console.error("Error:", error);
    });

    }
    else{
      fetch(`http://localhost:8080/reservation/${reser.id}`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date:dataValue,
        people:formData.get("people"),
        hour:hora.current.value
        }),
    })
    .then((response) => response.json())
    .then((data) => (data))
    .catch((error) => {
      console.error("Error:", error);
    });

    }
    setModal(false)
  
  }

    const handleChange = (event) =>{
      if (event.target.name=== "hour") {
        const newHour = event.target.value
        console.log(newHour)
        setHour(newHour)
      }
      if (event.target.name=== "people") {
        const newPeople = event.target.value
        console.log(newPeople)
        setPeople(newPeople)
      }
      if (event.target.name=== "date") {
        const newDate = event.target.value
        setDataValue(newDate)
      }
    }

    const obtenerFecha = () => {
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    setState(`${year}-${month}-${day}`);
  };

  useEffect(() => {
    obtenerFecha();
    if (reser !=undefined){
      setDataValue(reser.date)
      hora.current.value = reser.hour
      peopleR.current.value = reser.people
    }
  },[]);
  
  return (
    <>
      <div className="font-reservation">
        <div className="modal-reservation">
            <form onSubmit={handleSubmit} ref={form}>
            <div className="reservation">
            <p>Cantidad de personas:</p>
          <input type="number" ref={peopleR} onChange={handleChange} value={people && people} name="people" placeholder="Cantidad de personas"/>
          <p>Hora:</p>
          <select onChange={handleChange} name="hour" value={hour && hour} ref={hora}>
            <option value="00:00">00:00</option>
            <option value="00:30">00:30</option>
            <option value="01:00">01:00</option>
            <option value="01:30">01:30</option>
            <option value="02:00">02:00</option>
            <option value="02:30">02:30</option>
            <option value="03:00">03:00</option>
            <option value="03:30">03:30</option>
            <option value="04:00">04:00</option>
            <option value="04:30">04:30</option>
            <option value="05:00">05:00</option>
            <option value="05:30">05:30</option>
            <option value="06:00">06:00</option>
            <option value="06:30">06:30</option>
            <option value="07:00">07:00</option>
            <option value="07:30">07:30</option>
            <option value="08:00">08:00</option>
            <option value="08:30">08:30</option>
            <option value="09:00">09:00</option>
            <option value="09:30">09:30</option>
            <option value="10:00">10:00</option>
            <option value="10:30">10:30</option>
            <option value="11:00">11:00</option>
            <option value="11:30">11:30</option>
            <option value="12:00">12:00</option>
            <option value="12:30">12:30</option>
            <option value="13:00">13:00</option>
            <option value="13:30">13:30</option>
            <option value="14:00">14:00</option>
            <option value="14:30">14:30</option>
            <option value="15:00">15:00</option>
            <option value="15:30">15:30</option>
            <option value="16:00">16:00</option>
            <option value="16:30">16:30</option>
            <option value="17:00">17:00</option>
            <option value="17:30">17:30</option>
            <option value="18:00">18:00</option>
            <option value="18:30">18:30</option>
            <option value="19:00">19:00</option>
            <option value="19:30">19:30</option>
            <option value="20:00">20:00</option>
            <option value="20:30">20:30</option>
            <option value="21:00">21:00</option>
            <option value="21:30">21:30</option>
            <option value="22:00">22:00</option>
            <option value="22:30">22:30</option>
            <option value="23:00">23:00</option>
            <option value="23:30">23:30</option>
          </select>
          <p>Fecha:</p>
          <input type="date" name="date" value={dataValue && dataValue} min={state} max="2025-01-01" onkeydown="return false" onChange={handleChange}/>
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
