import Header from "../Components/Header";
import Layout from "../Conteiners/Layout";
import FromEdit from "../Components/FromEdit";
import ModalMenu from "../Components/ModalMenu";
import { useState } from "react";
import ModalHorario from "../Components/ModalHorario";

function RestauranrEdit() {

    const [menuModal, setMenuModal] = useState(false)

    return ( 
        <>
        <ModalHorario/>
        {menuModal &&
            <ModalMenu menuModal={menuModal} setMenuModal={setMenuModal}/>
        }
            <Header></Header>
            <Layout>
                <FromEdit menuModal={menuModal} setMenuModal={setMenuModal}/>
            </Layout>
        </>
     );
}

export default RestauranrEdit;