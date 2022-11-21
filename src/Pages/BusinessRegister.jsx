import Layout from "../Conteiners/Layout";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import ModalLoginB from "../Components/ModalLoginB";
import ForRegisterB from "../Components/ForRegisterB";
import { useState } from "react";

function BusinessRegister() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && (
        <ModalLoginB estado={showLogin} cambiarEstado={setShowLogin} />
      )}
      <Header></Header>
      <Layout>
        <ForRegisterB estado={showLogin} cambiarEstado={setShowLogin} />
      </Layout>
    </>
  );
}

export default BusinessRegister;
