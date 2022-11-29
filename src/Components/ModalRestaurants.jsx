import '../assets/Styles/ModalRestaurants.css'
import '../assets/Styles/Star.css'
import Rafa from '../assets/Img/banner-placeholder.jpg'
import Cancel from '../assets/Img/cancel.svg'
import AddReservation from './AddReservation';
import { useEffect, useState } from 'react';
import {FaStar} from 'react-icons/fa'

function ModalRestaurants({setRestaurant, id, idUser}) {
    
    const [dato, setDato]= useState(null)
    const [menu, setMenu]=useState([])
    const [Logueado, setLogueado] = useState(false)
    const [reservacionData, setReservacionData] = useState([])
    let Hora = new Array([]);

    const SplitHora = () =>{
        Hora = (dato && dato.schedule.split(","))
        console.log(Hora)
    }

    const reservacion = () => {
        fetch(`http://localhost:8080/${idUser}/reservations`, {
            method: "GET", headers: {
                Accept: "aplication/json",
                "Content-Type": "Aplication/json"
            }, mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
      
        })
            .then((response) => {return response.json()})
            .then((respuesta => {setReservacionData(respuesta.data)}))
            .catch((error) => {
                console.error('Error:', error);
            });
            console.log(reservacionData);
    }

    useEffect(()=>{
        fetch(`http://localhost:8080/restaurant/${id}`, {
            method: "GET", headers: {
                Accept: "aplication/json",
                "Content-Type": "Aplication/json"
            }, mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
      
        })
            .then((response) => {return response.json()})
            .then((respuesta => {setDato(respuesta.data), setMenu(JSON.parse(respuesta.data.menu))}))
            .catch((error) => {
                console.error('Error:', error);
            });
            reservacion();
    }, [1])

    const login = ()  =>{
        if(idUser==undefined){
            alert("Aun no estas logueado :(")
        }else{
            setModal(true)
        }
    }

    const [modal, setModal] = useState(false)

    useEffect(()=>{
        //cmabar el id y el reseña como esta en la base de datos
        fetch(`http://localhost:8080/reseña/${id}`, {
      method: "GET", headers: {
          Accept: "aplication/json",
          "Content-Type": "Aplication/json"
      }, mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
      },

  })
     .then((response) => {return response.json()})
     .then((respuesta => setRating(respuesta.data)))
     .catch((error)=>{
        console.error('Error: ', error);
     });
      })
    
    const [rating,setRating] = useState(null);
    const [hover, setHover] = useState(null);

   
    return ( 
        <>
        { 
            modal && 
                <AddReservation setModal={setModal} idUser={idUser} idRestaurant={dato.id}/>
        }

            <div className='backRestaurant'>
            <div className='frontRestaurant'>
                <div className='cancel-button'>
                    <img src={Cancel} alt="" onClick={()=>setRestaurant(false)} />
                </div>
                <div className='image-banner-restaurant'>
                    <img src={Rafa} alt="" />
                </div>
                <div className='restaurant-name-in'><p>{dato && dato.name}</p></div>
                <div className='data-restaurant'>
                    <div className='direccion-zone'>
                        <p><b>Direccion:</b></p>
                        <p>{dato && dato.address}</p>
                        <p><b>Zona:</b></p>
                        <p>{dato && dato.zone.name}</p>
                    </div>
                    <div className='Horario'>
                        {
                            dato &&
                            SplitHora()
                        }
                        <p><b>Horario:</b></p>
                        <p className='dias'>Lunes:</p>
                        <p>{Hora[0]}</p>
                        <p className='dias'>Martes:</p>
                        <p>{Hora[1]}</p>
                        <p className='dias'>Miercoles:</p>
                        <p>{Hora[2]}</p>
                        <p className='dias'>Jueves:</p>
                        <p>{Hora[3]}</p>
                        <p className='dias'>Viernes:</p>
                        <p>{Hora[4]}</p>
                        <p className='dias'>Sabado:</p>
                        <p>{Hora[5]}</p>
                        <p className='dias'>Domingo:</p>
                        <p>{Hora[6]}</p>
                    </div>
                    <div className='Menu'>
                        <p className='menu-title'><b>Menú:</b></p>
                        {
                            menu.map((item)=>(
                                <>
                                <p>{item.alimento}</p>
                                <p>$ {item.precio}</p>
                                </>
                            ))
                        }
                    </div>
                </div>
                <div className='photos-restaurant'>
                    AQUI VA UN SLIDER XD
                </div>
                <div className='Reservations-button'>
                    <button onClick={()=>login()}>Añadir Reservación</button>
                </div>
                <div className='reservacionC'>
                    <p><b>Reservación:</b></p>
                    <br></br>
                    <p>Cantidad de personas:</p>
                    <p>{}</p>
                    <p>Fecha:</p>
                    <p>{}</p>
                    <p>Hora:</p>
                    <p>{}</p>
                    <button>Cancelar</button>
                    <button>Editar</button>
                </div>
                <div className='resena'>
                    <p><b>Reseña</b></p>
                    <div>
                    {[...Array(5)].map((star, i)=>{
                      const ratingValue = i +1;

                     return(
                       <label>
                        <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)}
                        />
                        <FaStar className='star' color={ratingValue  <= (hover || rating) ? "#FFFF00" : "FFFFF"} 
                        size={30} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={()=> setHover(null)}
                        />
                    </label>
                );
            })}
            
                 </div>
                </div>
            </div>
        </div>
        </>
     );
        
        
}

export default ModalRestaurants;