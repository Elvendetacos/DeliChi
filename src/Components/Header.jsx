import Logo from '../assets/Img/CD.png'
import '../assets/Styles/Header.css'
import {useNavigate} from 'react-router';
import { useState } from 'react';

function Header({search, text}) {

   const navigate = useNavigate();  

    const redireccion = () =>{
        navigate('/Register')
    } 

    const toHome = () =>{
        navigate('/')
    } 

    return ( 
        <header>
            <div className='conteiner-header'>
                <div className='conteiner-Img'>
                    <img src={Logo} alt="" onClick={toHome}/>
                </div>
                <div className='conteiner-Search'>
                    {
                        search &&
                        <input type="text" name="" id="" />
                    }
                </div>
                <div className='conteiner-Name'>
                    {
                        text && 
                        <p onClick={redireccion}>Para empresas</p>
                    }
                </div>
            </div>
        </header>
     );
}

export default Header;