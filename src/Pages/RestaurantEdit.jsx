import Header from "../Components/Header";
import Layout from "../Conteiners/Layout";
import FromEdit from "../Components/FromEdit";
import ModalMenu from "../Components/ModalMenu";
import { useState } from "react";
import ModalHorario from "../Components/ModalHorario";
import ModalEstablecimiento from "../Components/ModalEstablecimiento";

function RestauranrEdit() {

    const [menuModal, setMenuModal] = useState(false)
    const [horarioModal, setHorarioModal] = useState(false)
    const [estabModal, setEstabModal] = useState(false)

    return ( 
        <>
        {
            estabModal && 
                <ModalEstablecimiento setEstabModal={setEstabModal}/>
        }
        {
            horarioModal && 
                <ModalHorario setHorarioModal={setHorarioModal}/>
        }
        {   menuModal &&
                <ModalMenu menuModal={menuModal} setMenuModal={setMenuModal}/>
        }
            <Header></Header>
            <Layout>
                <FromEdit setHorarioModal={setHorarioModal} setMenuModal={setMenuModal} setEstabModal={setEstabModal}/>
            </Layout>
        </>
     );
}

export default RestauranrEdit;