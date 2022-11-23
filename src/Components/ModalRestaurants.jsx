import '../assets/Styles/ModalRestaurants.css'
import Rafa from '../assets/Img/banner-placeholder.jpg'
import Cancel from '../assets/Img/cancel.svg'
import AddReservation from './AddReservation';
import { useEffect, useState } from 'react';

function ModalRestaurants({setRestaurant, id, idUser}) {
    
    const [dato, setDato]= useState(null)
    const [menu, setMenu]=useState([])
    const [Logueado, setLogueado] = useState(false)
    let Hora = new Array([]);

    const SplitHora = () =>{
        Hora = (dato && dato.schedule.split(","))
        console.log(Hora)
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
    }, [1])

    const login = ()  =>{
        if(idUser==undefined){
            alert("Aun no estas logueado :(")
        }else{
            setModal(true)
        }
    }

    const [modal, setModal] = useState(false)

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
            </div>
        </div>
        </>
     );
}

export default ModalRestaurants;