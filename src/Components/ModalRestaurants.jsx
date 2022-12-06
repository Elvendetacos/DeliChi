import '../assets/Styles/ModalRestaurants.css'
import Rafa from '../assets/Img/banner-placeholder.jpg'
import Cancel from '../assets/Img/cancel.svg'
import AddReservation from './AddReservation';
import { useEffect, useState } from 'react';
import {FaStar} from 'react-icons/fa'
import { validate } from 'uuid';
import {handleSumit} from 'react'
import { useForm } from "react-hook-form";
import "../assets/Styles/tablesComent.css";
function ModalRestaurants({setRestaurant, id, idUser ,idRestaurant}) {

    const { handleSubmit } = useForm();

    const [dato, setDato]= useState(null)
    const[comment, setComment]= useState([])
    const [menu, setMenu]=useState([])
    const [imagen, setImagen] = useState(null);
    const [Logueado, setLogueado] = useState(false)
    const [reservacionData, setReservacionData] = useState([])
    let Hora = new Array([]);

    const SplitHora = () =>{
        Hora = (dato && dato.schedule.split(","))
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

        fetch(`http://localhost:8080/image/getBanner/${id}`, {
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
        .then((respuesta => {setImagen(respuesta.data.fileUrl)}))
        .catch((error) => {
                console.error('Error:', error);
        });
        
        
       
    }, [1])

    const login = ()  =>{
        console.log(idUser);
        if(idUser==undefined){
            alert("Aun no estas logueado :(")
        }else{
            setModal(true)
        }
    }

    const [modal, setModal] = useState(false)

    useEffect(()=>{
        fetch(`http://localhost:8080/comment/restaurant/${id}/comments`, {
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
        .then((respuesta => setComment(respuesta.data)))
        .catch((error)=>{
            console.error('Error: ', error);
        });
    })
    
    const [rating,setRating] = useState(null);
    const [hover, setHover] = useState(null);


    function subir () {
        let comment = document.getElementById("commentInput").value;
        console.log(idUser);
        fetch(`http://localhost:8080/comment/user/${idUser}/restaurant/${id}`,{
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                date:"1",
                content:comment,
                score:rating
            }),
        })
        .then((response) => response.json())
        .then((data) => {console.log(data), document.getElementById("commentInput").innerHTML=""})
        .catch((error) => {
            console.error("Error:", error);
        });
    }
/*
handleSumit = e => {
    e.preventDefault()
    let {error,...sinErros} = this.state
    let result = validate(sinErros)
    
    this.setState ({erros:result})
    if(!Object.keys(result).length){
        console.log("formulario valido")
        e.target.reset()
    }
}*/
  
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
                    
                    <img src={imagen} alt="" />
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
                {/*<div className='photos-restaurant'>
                    AQUI VA UN SLIDER XD
                </div>*/}
                <div className='Reservations-button'>
                    <button onClick={()=>login()}>Añadir Reservación</button>
                </div>
                        <div className='resena'>
                            <p>Comentarios:</p>
                            <input type="text" id="commentInput" ></input>
                             <p>Reseña: </p> 
                             <div>
                             {[...Array(5)].map((star, i)=>{
                              const ratingValue = i +1;

                             return(
                               <label>
                                 <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)}/>
                                <FaStar className='star' color={ratingValue <= (hover || rating) ? "#FCE40A" : "#ffff"} 
                                 size={30} onClick={() => setHover(ratingValue)} onMouseLeave={()=> setHover(null)}
                                />
                                </label>
                );
            })}
            
        </div>
               </div> 
               <div className="pu">
            <button className="public" onClick={() => subir()}>
              Publicar
            </button>
          </div>

          <div className="com">
            <h4>COMENTARIOS:</h4>
            <div className="container">
              <table className="table1">
                <thead>
                  <tr>
                    <th className="jiji">Usuario : </th>
                    <th className="jiji">Comentarios : </th>
                    <th className="jiji"> Puntuacion : </th>
                  </tr>
                </thead>
                <tbody>
                  {comment.map((comentario) => (
                    <tr>
                      <td>{comentario.user.name}</td>
                      <td>{comentario.content}</td>
                      <td>{comentario.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalRestaurants;
