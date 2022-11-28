import '../assets/Styles/Nav.css'

function Nav({setRegister, setLogin, setReservacion}) {
    return (
      <nav>
        <div className="reser">
          <p onClick={() => setReservacion(true)}> View</p>
        </div>
        <div className="ingresar">
          <p onClick={()=>setRegister(true)}>Ingresar</p>
        </div>
        <div className="iniciarSesion">
          <p onClick={()=>setLogin(true)}>Iniciar Sesión</p>
        </div>
      </nav>
    );
}

export default Nav;