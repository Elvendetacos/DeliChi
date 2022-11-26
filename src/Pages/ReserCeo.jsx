import {useState} from 'react'
import RCeo from "../Components/ReservationCeo";
import Header from '../Components/Header';
import Layout from '../Conteiners/Layout';

function ReserCeo() {
    const [search,setSearch] = useState(false)
    return ( 
        <>
        <Header search={search}/>
        <Layout>
            <RCeo></RCeo>
        </Layout>
        </>
    );
}

export default ReserCeo;