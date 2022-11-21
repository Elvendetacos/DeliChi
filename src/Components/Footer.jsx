import '../assets/Styles/Footer.css'
import Facebook from '../assets/Img/facebook.png'
import Instagram from '../assets/Img/instagram.png'
import Twitter from '../assets/Img/twitter.png'

function Footer() {
    return ( 
        <footer>
            <div className="imagen-footer">
                <img src={Facebook} alt="" className='Facebook'/>
                <img src={Instagram} alt="" className='Instagram'/>
                <img src={Twitter} alt="" className='Twitter'/>
            </div>
        </footer>
     );
}

export default Footer;