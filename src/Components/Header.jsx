import Logo from '../assets/Img/CD.png'
import '../assets/Styles/Header.css'

function Header() {
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
                    <p>Para empresas</p>
                </div>
            </div>
        </header>
     );
}

export default Header;