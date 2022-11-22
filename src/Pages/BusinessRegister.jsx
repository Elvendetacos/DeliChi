import Layout from "../Conteiners/Layout";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import ModalLoginB from "../Components/ModalLoginB";
import ForRegisterB from "../Components/ForRegisterB";
import Contexto from "../Contextos/ContextoCeo";
import { useState } from "react";
import { useContext } from 'react'

function BusinessRegister() {
  const [showLogin, setShowLogin] = useState(false);
  const { id, setId } = useContext(Contexto);

  return (
    <>
      {showLogin && (
        <ModalLoginB
          estado={showLogin}
          cambiarEstado={setShowLogin}
          ids={id}
          cambiarid={setId}
        />
      )}
      <Header></Header>
      <Layout>
        <ForRegisterB estado={showLogin} cambiarEstado={setShowLogin} />
      </Layout>
    </>
  );
}

export default BusinessRegister;
