import "../assets/Styles/ModalMenu.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MenuTable from "./MenuTable";
import FormTableMenu from "./FormTableMenu";
import Modal from "../Conteiners/Modal";
import { useEffect } from "react";

function ModalMenu({menuEdit, setMenuEdit, menuModal, setMenuModal, menu, setMenu}) {
  console.log(menu);

  useEffect(()=> {
    if(menuEdit != undefined){
      const menuResult = JSON.parse(menuEdit)
      if(menu.length == 0){
        setMenu(menuResult)
      }else{
        console.log("no chavo")
      }
    }
  },[])

  const addMenu = (Liz) => {
    Liz.id = uuidv4();
    console.log(menu.id);
    setMenu([...menu, Liz]);
  };

  const deleteUser = (id) => {
    const Filter = menu.filter((menu) => menu.id != id);
    setMenu(Filter);
  };

  const Salir =()=>{
    if(menu.length == 0){
      alert("Ningun alimento agregado")
    }else{
      setMenuModal(!menuModal)
    }
  }

  return (
    <>
      <Modal>
        <FormTableMenu addMenu={addMenu} />
        <MenuTable menu={menu} deleteUser={deleteUser} />
        <div className="opciones">
          <button onClick={() => Salir()}>Aceptar</button>
        </div>
      </Modal>
    </>
  );
}

export default ModalMenu;
