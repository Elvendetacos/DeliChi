import Header from "../Components/Header";
import Layout from "../Conteiners/Layout";
import FromListRegister from "../Components/FromListRestaurant";
import {useState} from 'react'

function ListRestaurant() {
  const [search, setSearch] = useState(false)
  const [text, setText] = useState(false)
  return (
    <>
        <Header search={search} text={text}/>
      <Layout>
        <FromListRegister></FromListRegister>
      </Layout>
    </>
  );
}

export default ListRestaurant;
