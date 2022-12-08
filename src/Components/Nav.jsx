import '../assets/Styles/Nav.css'


function Nav({registers, inicio, view, cerra, setRegister, setLogin, setReservacion}) {
 
    return (
      <nav>
        <div className="ingresar">
          {view && <p onClick={() => setReservacion(true)}> View</p>}
          {registers && <p onClick={()=>setRegister(true)}>Registrate</p>}
        </div>
        <div className="iniciarSesion">
          {cerra && <p onClick={()=>(window.location.replace(''))}>Cerrar sesión</p>}
          {inicio && <p onClick={()=>setLogin(true)}>Iniciar Sesión</p>}
        </div>
      </nav>
    );
}

export default Nav;