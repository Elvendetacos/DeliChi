import Header from "../Components/Header";
import Layout from "../Conteiners/Layout";
import FromEdit from "../Components/FromEdit";
import ModalMenu from "../Components/ModalMenu";
import { useState } from "react";
import ModalHorario from "../Components/ModalHorario";
import ModalEstablecimiento from "../Components/ModalEstablecimiento";
import { useEffect } from "react";

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

  const [horaioG, setHorarioG] = useState();
  const [menuEdit, setMenuEdit] = useState();
  const [mesa, setMesa] = useState();
  const [person, setPerson] = useState();

  return (
    <>
      {estabModal && <ModalEstablecimiento numberTable={numberTable} capacityTable={capacityTable}  setMesa={setMesa} setPerson={setPerson} mesa={mesa} person={person} setEstabModal={setEstabModal} setNumberTable={setNumberTable} setCapacityTable={setCapacityTable}/>}
      {horarioModal && <ModalHorario horaioG={horaioG} setHorarioModal={setHorarioModal} setHora={setHora} hora={hora}/>}
      {menuModal && (
        <ModalMenu setMenuEdit={setMenuEdit} menuEdit={menuEdit} menuModal={menuModal} setMenuModal={setMenuModal} menu={menu} setMenu={setMenu}/>
      )}
      <Header search={search} text={text} />
      <Layout>
        <FromEdit
          setHorarioG={setHorarioG}
          setHorarioModal={setHorarioModal}
          setMenuModal={setMenuModal}
          setEstabModal={setEstabModal}
          setMenuEdit={setMenuEdit}
          setMesa={setMesa}
          setPerson={setPerson}
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
