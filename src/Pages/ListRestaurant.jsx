import Header from "../Components/Header";
import Layout from "../Conteiners/Layout";
import FromListRegister from "../Components/FromListRestaurant";

function ListRestaurant() {
  return (
    <>
      <Header></Header>
      <Layout>
        <FromListRegister></FromListRegister>
      </Layout>
    </>
  );
}

export default ListRestaurant;
