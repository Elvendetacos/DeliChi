import "../assets/Styles/BusinessRegister.css";
import { useRef } from "react";
import Swal from "sweetalert2";

function ForRegisterB({estado, cambiarEstado}) {

  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);

  fetch(`http://localhost:8080/ceo`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email:formData.get("email"),
      name:formData.get("name"),
      firstSurname:formData.get("firstname"),
      secondSurname:formData.get("secondname"),
      phoneNumber:formData.get("phone"),
      password:formData.get("password")
        }),
  })
  .then((response) => response.json())
  .then((data) => {console.log(data),validateResponse(data.success), 
    form.current.reset()})
  .catch((error) => {
    console.error("Error:", error);
  });

  form.current.reset();

};

function validateResponse(succes){
  console.log(succes)
if(succes==true){
  Swal.fire({
    position: "top",
    icon: "success",
    title: "Registrado correctamente",
    showConfirmButton: false,
    timer: 1500,
  })
}else{
  Swal.fire({
  position: "top",
  icon: "error",
  title: "CEO no registrado",
  text: "Datos erroneos",
  showConfirmButton: false,
  timer: 1500,
})
}
}
  
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
          <form onSubmit={handleSubmit} ref={form}>
            <div className="formulario-A">
                <div className="formulario-B">
                    <p>Nombre: </p>
                    <input type="text" name="name" />
                    <p>Apellido Paterno: </p>
                    <input type="text" name="firstname"/>
                    <p>Apellido Materno: </p>
                    <input type="text" name="secondname" />
                    <p>Email: </p>
                    <input type="email" name="email"/>
                    <p>Teléfono: </p>
                    <input type="number" min="1" name="phone"/>
                    <p>Contraseña: </p>
                    <input type="password" name="password"/>
                    <button className="RegisterBus">Enviar</button>
                    <button className="LoginBus" type="button" onClick={()=>cambiarEstado(!estado)}>Iniciar Sesión</button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForRegisterB;
