import '../assets/Styles/Home.css'
import Header from '../Components/Header';
import Layout from '../Conteiners/Layout';
import Nav from '../Components/Nav';
import FromHome from '../Components/FromHome';
import ModalRestaurants from '../Components/ModalRestaurants';
import { useState } from 'react';
import ModalRegister from '../Components/ModalRegister';
import ModalLogin from '../Components/ModalLogin';

function Home() {

    const [Restaurant, setRestaurant] = useState(false)
    const [register, setRegister] = useState(false)
    const [login, setLogin] = useState(false)

    return ( 
        <>
        {
            login && 
                <ModalLogin setLogin={setLogin}/>
        }
        {
            register && 
                <ModalRegister setRegister={setRegister}/>
        }
        {
            Restaurant && 
                <ModalRestaurants setRestaurant={setRestaurant}/>
        }
        <Header></Header>
        <Nav setRegister={setRegister} setLogin={setLogin}/>
        <Layout>
            <FromHome setRestaurant={setRestaurant}/>
        </Layout>
        </>
     );
}

export default Home;