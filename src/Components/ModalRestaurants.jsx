import '../assets/Styles/ModalRestaurants.css'
import Rafa from '../assets/Img/banner-placeholder.jpg'
import Cancel from '../assets/Img/cancel.svg'
import AddReservation from './AddReservation';
import { useState } from 'react';

function ModalRestaurants({setRestaurant}) {

    const [modal, setModal] = useState(false)

    return ( 
        <>
        { 
            modal && 
                <AddReservation setModal={setModal}/>
        }
            <div className='backRestaurant'>
                <div className='frontRestaurant'>
                    <div className='cancel-button'>
                        <img src={Cancel} alt="" onClick={()=>setRestaurant(false)} />
                    </div>
                    <div className='image-banner-restaurant'>
                        <img src={Rafa} alt="" />
                    </div>
                    <div className='restaurant-name-in'><p>GORDITAS DON RAFITA</p></div>
                    <div className='data-restaurant'>
                        <div className='direccion-zone'>
                            <p><b>Direccion:</b></p>
                            <p></p>
                            <p><b>Zona:</b></p>
                            <p></p>
                        </div>
                        <div className='Horario'>
                            <p><b>Horario:</b></p>
                            <p className='dias'>Lunes:</p>
                            <p></p>
                            <p className='dias'>Martes:</p>
                            <p></p>
                            <p className='dias'>Miercoles:</p>
                            <p></p>
                            <p className='dias'>Jueves:</p>
                            <p></p>
                            <p className='dias'>Viernes:</p>
                            <p></p>
                            <p className='dias'>Sabado:</p>
                            <p></p>
                            <p className='dias'>Domingo:</p>
                            <p></p>
                        </div>
                        <div className='Menu'>
                            <p className='menu-title'><b>Menú:</b></p>
                        </div>
                    </div>
                    <div className='photos-restaurant'>
                        AQUI VA UN SLIDER XD
                    </div>
                    <div className='Reservations-button'>
                        <button onClick={()=> setModal(true)}>Añadir Reservación</button>
                    </div>
                </div>
            </div>
        </>
     );
}

export default ModalRestaurants;