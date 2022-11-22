import Logo from '../assets/Img/CD.png'
import '../assets/Styles/Header.css'
import {useNavigate} from 'react-router';

function Header() {

   const navigate = useNavigate();  

    const redireccion = () =>{
        navigate('/Register')
    } 

    return ( 
        <header>
            <div className='conteiner-header'>
                <div className='conteiner-Img'>
                    <img src={Logo} alt="" />
                </div>
                <div className='conteiner-Search'>
                        <input type="text" name="" id="" />
                </div>
                <div className='conteiner-Name'>
                    <p onClick={redireccion}>Para empresas</p>
                </div>
            </div>
        </header>
     );
}

export default Header;