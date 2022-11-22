import '../assets/Styles/Nav.css'

function Nav({setRegister, setLogin}) {
    return (
      <nav>
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