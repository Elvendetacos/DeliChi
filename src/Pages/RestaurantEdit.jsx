import Header from "../Components/Header";
import Layout from "../Conteiners/Layout";
import FromEdit from "../Components/FromEdit";
import ModalMenu from "../Components/ModalMenu";
import { useState } from "react";
import ModalHorario from "../Components/ModalHorario";
import ModalEstablecimiento from "../Components/ModalEstablecimiento";

function RestauranrEdit() {
  const [menuModal, setMenuModal] = useState(false);
  const [horarioModal, setHorarioModal] = useState(false);
  const [estabModal, setEstabModal] = useState(false);
  const [search, setSearch] = useState(false);
  const [text, setText] = useState(false);
  const [menu, setMenu] = useState([]);
  const [hora, setHora] = useState();
  const [numberTable, setNumberTable] = useState(null);
  const [capacityTable, setCapacityTable] = useState(null);


  return (
    <>
      {estabModal && <ModalEstablecimiento setEstabModal={setEstabModal} setNumberTable={setNumberTable} setCapacityTable={setCapacityTable}/>}
      {horarioModal && <ModalHorario setHorarioModal={setHorarioModal} setHora={setHora} hora={hora}/>}
      {menuModal && (
        <ModalMenu menuModal={menuModal} setMenuModal={setMenuModal} menu={menu} setMenu={setMenu}/>
      )}
      <Header search={search} text={text} />
      <Layout>
        <FromEdit
          setHorarioModal={setHorarioModal}
          setMenuModal={setMenuModal}
          setEstabModal={setEstabModal}
          menu={menu}
          hora={hora}
          numberTable={numberTable}
          capacityTable={capacityTable}
        />
      </Layout>
    </>
  );
}

export default RestauranrEdit;
