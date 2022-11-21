import "../assets/Styles/ListR.css";
import Add from "../assets/Img/ADDcircle.svg";
import CardList from "../Cards/CardList";

function FromListRegister() {

  return (
    <>
      <div className="conteiner-list">
        <div className="list-restaurants">
          <div className="cards-restaurants">
            <div className="add-restaurant">
              <img src={Add} alt="" />
              <p>Agregar un restaurante</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FromListRegister;
