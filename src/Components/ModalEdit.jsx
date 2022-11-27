import React from 'react'
import jiji from '../assets/img/xD.jpg'
const Modal = ({open,onClose}) => {

    if(!open)return null;

return(
    <div className='overlay'>
  <div className='modalContainer'>
  <img src={jiji} alt=''/>
  <div className="modalRight">
   <p onClick={onClose} className='closeBtn'>X</p>
   <div className="content">
    <p>Aqui iran las tablas alv</p>
    <h1>aqui namas van a hacer la logica con base a el code que le mande a abril ayer en whats ya viene la lista hecha </h1>
    <p>jijijija</p>
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