import "../assets/Styles/ModalMenu.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MenuTable from "./MenuTable";
import FormTableMenu from "./FormTableMenu";
import Modal from "../Conteiners/Modal";

function ModalMenu({ menuModal, setMenuModal }) {
  const data = [];

  const [menu, setMenu] = useState(data);
  console.log(menu);

  const addMenu = (menus) => {
    menus.id = uuidv4();
    console.log(menu.id);
    setMenu([...menu, menus]);
  };

  const deleteUser = (id) => {
    const Filter = menu.filter((menu) => menu.id != id);
    setMenu(Filter);
  };

  return (
    <>
      <Modal>
        <FormTableMenu addMenu={addMenu} />
        <MenuTable menu={menu} deleteUser={deleteUser} />
        <div className="opciones">
          <button onClick={() => setMenuModal(!menuModal)}>Aceptar</button>
        </div>
      </Modal>
    </>
  );
}

export default ModalMenu;
