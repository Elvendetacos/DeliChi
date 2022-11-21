import "../assets/Styles/BusinessRegister.css";

function ForRegisterB({estado, cambiarEstado}) {
  return (
    <>
      <div className="conteiner-father">
        <div className="conteiner-Register-1">
          <div className="us">
            <p className="titulo-c">¿Quienes somos?</p>
            <p className="descripcion-c">
              Somos una empresa Chiapaneca que extiende sus servicios a los 124
              municipios de Chiapas contando con la mayor seguridad
              proporcionada para los usuarios.
            </p>
            <p className="titulo-c">¿Qué hacemos?</p>
            <p className="descripcion-c">
              Unimos a los restaurantes para proporcionarle a los usuarios una
              reservación en todo momento.
            </p>
            <p className="titulo-c">Tu tienes el control</p>
            <p className="descripcion-c">
              Tus horarios y las reservaciones se mantiene según los
              establezcas, siendo editables cuando sea necesario.
            </p>
          </div>
        </div>
        <div className="conteiner-Register-2">
            <div className="formulario-A">
                <div className="formulario-B">
                    <p>Nombre: </p>
                    <input type="text" name="" id="" />
                    <p>Apellido Paterno: </p>
                    <input type="text" name="" id="" />
                    <p>Apellido Materno: </p>
                    <input type="text" name="" id="" />
                    <p>Email: </p>
                    <input type="email" name="" id="" />
                    <p>Teléfono: </p>
                    <input type="number" min="1" name="" id="" />
                    <p>Contraseña: </p>
                    <input type="password" name="" id="" />
                    <button className="RegisterBus">Enviar</button>
                    <button className="LoginBus" onClick={()=>cambiarEstado(!estado)}>Iniciar Sesión</button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default ForRegisterB;
