import Header from "../Components/Header";
import Layout from "../Conteiners/Layout";
import { useContext } from "react";
import FromListRegister from "../Components/FromListRestaurant";
import {useState} from 'react'
import idResturant from "../Contextos/ContextoRestaurant"

function ListRestaurant() {
  const [search, setSearch] = useState(false)
  const [text, setText] = useState(false)
  const [editar, setEditar] = useState(false)
  const {idrestaurant, setIdRestaurant} = useContext(idResturant)
  
  
  return (
    <>
        <Header search={search} text={text}/>
      <Layout>
        <FromListRegister setIdRestaurant={setIdRestaurant} setEditar={setEditar}></FromListRegister>
      </Layout>
    </>
  );
}

export default ListRestaurant;
