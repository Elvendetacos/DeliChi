import '../assets/Styles/Home.css'
import Header from '../Components/Header';
import Layout from '../Conteiners/Layout';
import Nav from '../Components/Nav';
import FromHome from '../Components/FromHome';
import ModalRestaurants from '../Components/ModalRestaurants';
import { useState, useContext } from 'react';
import ModalRegister from '../Components/ModalRegister';
import ModalLogin from '../Components/ModalLogin';
import User from '../Contextos/ContextoUser'

function Home() {

    const [Restaurant, setRestaurant] = useState(false)
    const [register, setRegister] = useState(false)
    const [login, setLogin] = useState(false)
    const [search, setSearch] = useState(true)
    const [text, setText] = useState(true)
    const [id, setId] = useState()
    const { idUser, setIdUser } = useContext(User);


    return ( 
        <>
        {
            login && 
                <ModalLogin setLogin={setLogin} setIdUser={setIdUser}/>
        }
        {
            register && 
                <ModalRegister setRegister={setRegister}/>
        }
        {
            Restaurant && 
                <ModalRestaurants setRestaurant={setRestaurant} id={id} idUser={idUser}/>
        }
        <Header search={search} text={text}/>
        <Nav setRegister={setRegister} setLogin={setLogin}/>
        <Layout>
            <FromHome setRestaurant={setRestaurant} setId={setId}/>
        </Layout>
        </>
     );
}

export default Home;