import "../assets/Styles/RestaurantEdit.css";
import { useEffect, useRef, useState, useContext } from "react";
import AddImage from "../assets/Img/add-image.png";
import CardImage from "../Cards/CardImage";
import Contexto from "../Contextos/ContextoCeo";
import { json, useNavigate } from "react-router-dom";
import ContextoRestaurant from "../Contextos/ContextoRestaurant";
import axios from "axios";
import ModalEdit from "./ModalEdit";
const imageType = /image\/(png|jpg|jpeg|svg)/i;
const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;
import Swal from "sweetalert2";
import ContextoTokenCeo from "../Contextos/ContextoTokenCeo";

function FromEdit({
  setMesa,
  setPerson,
  setHorarioG,
  setMenuEdit,
  setHorarioModal,
  setMenuModal,
  setEstabModal,
  menu,
  hora,
  numberTable,
  capacityTable,
  setOpenModal,
  setReservacion
}) {
  const [restaurantData, setRestaurantData] = useState({});
/*   const [idNewRestaurant, setIdNewRestaurant] = useState(); */
  var time;
  const { idRestaurant, setIdRestaurant } = useContext(ContextoRestaurant);
  const { tokenCeo } = useContext(ContextoTokenCeo)
  const a = useNavigate();
  const profile1 = useRef(null);

  const MenuF = JSON.stringify(menu);

  const banner1 = useRef(null);


  // id -> ceoId
  const { id } = useContext(Contexto);
  const [profile, setProfile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const [banner, setBanner] = useState(null);
  const [fileBannerURL, setFileBannerURL] = useState(null);

  const [imageFiles, setImageFiles] = useState([]);
  const [images, setImages] = useState([]);
  const [image, setImage] = useState([]);
  
  const [zone, setZone] = useState([]);
  const [zoneEdit, setZoneEdit] = useState();
  const form = useRef(null);
  const tipoComida = useRef(null);
  const tipoZona = useRef(null);
  const [reservations, setReservations] = useState([]);
  const [guardar, setGuardar] = useState(false)

  const handleChange = (event) => {
    if (event.target.name === "zona") {
      if (zoneEdit === zoneEdit) {
        const newzone = event.target.value;
        setZoneEdit(newzone);
      }
    } else {
      setRestaurantData({
        ...restaurantData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const loadData =  () => {
    fetch(`http://localhost:8080/restaurant/${idRestaurant}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "Application/json",
      },
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
    })
      .then((response) => {
        return response.json();
      })
      .then((respuesta) => {
        console.log(respuesta.data);
        setRestaurantData(respuesta.data),
        setReservacion(respuesta.data.reservations),
        setReservations(respuesta.data.reservations),
        setZoneEdit(respuesta.data.zone.id),  
        setFileDataURL(respuesta.data.images[1].fileUrl),
        setFileBannerURL(respuesta.data.images[0].fileUrl)
        setImage(
          respuesta.data.images.filter(function (type) { return type.imageType == 'images' })
        )
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    };

  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageType)) {
      alert("El archivo no es una imagen");
      return;
    }
    setProfile(file);
  };

  const profileView = () => {
    let fileReader = false;
    if (profile) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(profile);
    }
  };

  const changeBanner = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageType)) {
      alert("El archivo no es una imagen");
      return;
    }
    setBanner(file);
  };

  const bannerView = () => {
    let fileReader = false;
    if (banner) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result) {
          setFileBannerURL(result);
        }
      };
      fileReader.readAsDataURL(banner);
    }
  };

  const changeResources = (e) => {
    const { files } = e.target;
    const validImageFiles = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.match(imageTypeRegex)) {
        validImageFiles.push(file);
      }
    }
    if (validImageFiles.length) {
      setImageFiles(validImageFiles);
      return;
    }
    alert("Algunas imagenes tienen un formato incorrecto");
  };

  const resourcesView = () => {
    const fileReaders = [];
    let isCancel = false;

    if (imageFiles.length) {
      const promises = imageFiles.map((file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReaders.push(fileReader);
          fileReader.onload = (e) => {
            const { result } = e.target;
            if (result) {
              resolve(result);
            }
          };
          fileReader.onabort = () => {
            reject(new Error("File reading aborted"));
          };
          fileReader.onerror = () => {
            reject(new Error("Failed to read file"));
          };
          fileReader.readAsDataURL(file);
        });
      });
      Promise.all(promises)
        .then((images) => {
          if (!isCancel) {
            setImages(images);
          }
        })
        .catch((reason) => {
          console.log(reason);
        });
    }
  };

  const zonesData = () => {
    fetch(`http://localhost:8080/zone/zones`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "Application/json",
      },
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
    })
      .then((response) => {
        return response.json();
      })
      .then((respuesta) => setZone(respuesta.data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    if (idRestaurant != undefined) {
      setGuardar(true)
      loadData();
    }
    //zonesData();
  }, []);

  useEffect(() => {
    zonesData();
    bannerView();
    profileView();
    resourcesView();
  }, [{ profile, banner, imageFiles }]);

  const slider = useRef(null);

  const siguiente = () => {
    if (slider.current.children.length > 0) {
      const primerElemento = slider.current.children[0];
      slider.current.style.transition = `all 0.3s ease-out 0s`;
      slider.current.style.transform = `translateX(-50%)`;
    }
  };

  const Atras = () => {
    if (slider.current.children.length > 0) {
      const ultimoElemento = slider.current.children[0];
      slider.current.style.transition = `all 0.3s ease-out 0s`;
      slider.current.style.transform = `translateX(0%)`;
    }
  };

  // Upload images
  const uploadLogoImage = async (methodType, idNewRestaurant) => {
    console.log(
      "El id del ceo es: " + id + ", el id del restaurante es: " + idNewRestaurant + " token " + tokenCeo
    );
    const restaurantLogo = document.getElementById("profile").files[0];
    let formData = new FormData();
    formData.append("file", restaurantLogo);

    const path = idRestaurant == undefined ? "logo" : "updateLogo";

    await fetch(`http://localhost:8080/image/ceo/${id}/restaurant/${idNewRestaurant}/${path}`,{
        method: methodType,
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          'Authorization': tokenCeo,
          //"Content-Type": "application/json",
          Accept: "application/json",
        },
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {console.log(data), doUploadImages(idNewRestaurant);})
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const uploadBannerImage = async (idNewRestaurant) => {
    console.log(
      "El id del ceo es: " + id + ", el id del restaurante es: " + idNewRestaurant + "token" + tokenCeo
    );
    const restaurantBanner = document.getElementById("banner").files[0];
    let formData = new FormData();
    formData.append("file", restaurantBanner);

    const path = idRestaurant == undefined ? "banner" : "updateBanner";
    let methodType = idRestaurant == undefined ? "POST" : "PUT"

    await fetch(`http://localhost:8080/image/ceo/${id}/restaurant/${idNewRestaurant}/${path}`,{
        method: methodType,
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          'Authorization': tokenCeo,
          //"Content-Type": "application/json",
          Accept: "application/json",
        },
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data),
        uploadLogoImage(methodType, idNewRestaurant)})
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const doUploadImages = async (idNewRestaurant) => {
    const fileField = document.querySelector("#references");
    let totalFilesToUpload = fileField.files.length;

    let uploads = [];

    for (let i = 0; i < totalFilesToUpload; i++) {
      uploads.push(uploadFile(fileField.files[i], idNewRestaurant));
    } 
    await Promise.all(uploads);
  }

  async function uploadFile(file, idNewRestaurant) {
    let formData = new FormData();
    formData.append("file", file);

      await fetch(`http://localhost:8080/image/ceo/${id}/restaurant/${idNewRestaurant}/image`,{
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          'Authorization': tokenCeo,
          //"Content-Type": "application/json",
          Accept: "application/json",
        },
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {console.log(data)})
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const uploadData = async () => {
    const formData = new FormData(form.current);

    await fetch(
      `http://localhost:8080/restaurant/ceo/${id}/zone/${tipoZona.current.value}`,
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          'Authorization': tokenCeo,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phoneNumber: formData.get("phoneNumber"),
          address: formData.get("address"),
          schedule: hora,
          kitchen: tipoComida.current.value,
          description: formData.get("description"),
          menu: MenuF,
          tableNumber: numberTable,
          tableCapacity: capacityTable,
        }),
      }
    )
      .then((response) => response.json())
      .then((respuest) => {
        Swal.fire({
          timer: time,
          title: "Creando restaurante",
          allowOutsideClick: false,
          allowEscapeKey: false,
          didOpen: () =>{
            Swal.showLoading()
            uploadBannerImage(respuest.data.id)
          }/*,
          didClose: () =>{
            a('/list')
          }*/
        })
      })
      .catch((error) => {
        alert("hay un error" + error);
      });
  };

  const updateData = async () => {
    const formData = new FormData(form.current);

    await fetch(
      `http://localhost:8080/restaurant/${idRestaurant}/zone/${tipoZona.current.value}`,
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          'Authorization': tokenCeo,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phoneNumber: formData.get("phoneNumber"),
          address: formData.get("address"),
          schedule: hora,
          kitchen: tipoComida.current.value,
          description: formData.get("description"),
          menu: MenuF,
          tableNumber: numberTable,
          tableCapacity: capacityTable,
        }),
      }
    )
      .then((response) => response.json())
      .then((respuest) => 
      Swal.fire({
        timer: time,
        title: "Actualizando restaurante",
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () =>{
          Swal.showLoading()
          uploadBannerImage(idRestaurant)
        },
        didClose: () =>{
          a('/list')
        }
      }))
      .catch((error) => {
        console.error("Error:", error);
      });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const logoExist =
      document.getElementById("profile").files[0] != undefined ? true : false;
    const bannerExist =
      document.getElementById("banner").files[0] != undefined ? true : false;
    const fileField = document.querySelector("#references");
      let totalFilesToUpload = fileField.files.length;
      time = (totalFilesToUpload*1500) + 2000;

    if (idRestaurant == undefined) {

      if (logoExist == false)
      return Swal.fire('Necesitas subir un logo para continuar');
      if (bannerExist == false)
      return Swal.fire('Necesitas subir un banner para continuar');

      // When restaurant not exist}
      uploadData();
    
    } else {
      // When restaurant exist
      updateData();
    }
  };

  const regresar = () => {
    a("/List");
  };

  const loadHorario = (horario) => {
    setHorarioG(horario);
    setHorarioModal(true);
  };

  const loadMenu = (menu) => {
    setMenuEdit(menu);
    setMenuModal(true);
  };

  const loadAloj = (mesa, person) => {
    setMesa(mesa);
    setPerson(person);
    setEstabModal(true);
  };

  const reser = (reservation) => {
    setOpenModal(true);
    setReservacion(reservation);
  };
  
  return (
    <>
      <form onSubmit={handleSubmit} ref={form}>
        <div className="conteiner-edit">
          <div className="conteiner-edit-1">
            <div className="data-image">
              <div className="data-image-1" ref={slider}>
                <div className="data-image-1-1">
                  <div className="profile-edit">
                    <p className="title-profile">Agregar imagen de perfil: </p>
                    <div className="view-image-1">
                      <img src={fileDataURL} alt="" className="profile" />
                      <label className="addprofile" htmlFor="profile">
                        <img src={AddImage} alt="" />
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        id="profile"
                        ref={profile1}
                        onChange={changeHandler}
                      />
                    </div>
                  </div>
                  <div className="banner-edit">
                    <p>Agregar imagen de portada: </p>

                    <div className="view-image-2">
                      <img src={fileBannerURL} alt="" className="banner" />
                      <label className="addimage" htmlFor="banner">
                        <img src={AddImage} alt="" />
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        id="banner"
                        ref={banner1}
                        onChange={changeBanner}
                      />
                    </div>
                  </div>
                  <div className="button-next">
                    <button type="button" onClick={siguiente}>
                      Siguiente &gt;
                    </button>
                  </div>
                </div>
                <div className="data-image-1-2">
                  <div className="references-edit">
                    <p>Agrege imagenes de referencia: </p>
                    <div className="view-references">
                      <div className="conteiner-references">
                        {
                          image && image.map((img) => ( 
                            <CardImage key={img.id} resources={img.fileUrl}/>
                          ))
                        }
                        {
                          images && images.map((image, idx) => (
                            <CardImage key={idx} resources={image}/>
                          )) 
                        }
                      </div>
                      <label className="addreferences" htmlFor="references">
                        <img src={AddImage} alt="" />
                      </label>
                      <input
                        type="file"
                        id="references"
                        onChange={changeResources}
                        multiple
                        accept="image/*"
                      />
                    </div>
                  </div>
                  <div className="button-back">
                    <button type="button" onClick={Atras}>
                      &lt; Regresar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="conteiner-edit-2">
            {/*Iniciamos a insertar lod datos*/}
            <div className="data-info">
              <div className="conteiner-info">
                <p className="data-1">Nombre:</p>
                <input
                  type="text"
                  value={restaurantData && restaurantData.name}
                  onChange={handleChange}
                  name="name"
                  id=""
                  className="input-1"
                />
                <p className="data-2">Telefono:</p>
                <input
                  type="number"
                  value={restaurantData && restaurantData.phoneNumber}
                  onChange={handleChange}
                  name="phoneNumber"
                  id=""
                  className="input-2"
                />
                <p className="data-3">Descripci??n:</p>
                <textarea
                  name="description"
                  id=""
                  cols="30"
                  rows="10"
                  className="input-3"
                  onChange={handleChange}
                  value={restaurantData && restaurantData.description}
                ></textarea>
                <p className="data-4">Tipo de cocina:</p>
                <select
                  className="input-4"
                  ref={tipoComida}
                  onChange={handleChange}
                  name="kitchen"
                  value={restaurantData && restaurantData.kitchen}
                >
                  <option value="default">-Seleccione su cocina-</option>
                  <option value="chiapaneca">Chiapaneca</option>
                  <option value="mexicana">Mexicana</option>
                  <option value="extranjera">Extranjera</option>
                  <option value="rural">Rural</option>
                  <option value="mixto">Mixto</option>
                </select>
                <p className="data-5">Horarios:</p>
                <input
                  type="button"
                  className="input-5"
                  value="Agregar Horarios"
                  onClick={() =>
                    loadHorario(restaurantData && restaurantData.schedule)
                  }
                  onChange={handleChange}
                />
                <p className="data-6">Men??:</p>
                <input
                  type="button"
                  className="input-6"
                  value="Agregar Men??"
                  onClick={() =>
                    loadMenu(restaurantData && restaurantData.menu)
                  }
                />
                <p className="data-7">Alojamiento:</p>
                <input
                  onChange={handleChange}
                  type="button"
                  className="input-7"
                  value="Agregar Alojamiento"
                  onClick={() =>
                    loadAloj(
                      restaurantData && restaurantData.tableNumber,
                      restaurantData && restaurantData.tableCapacity
                    )
                  }
                />
                <p className="data-8">Zona:</p>
                <select
                  className="input-8"
                  name="zona"
                  value={zoneEdit && zoneEdit}
                  onChange={handleChange}
                  ref={tipoZona}
                >
                  <option value="default">-Seleccione su zona-</option>
                  {zone.map((item) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
                </select>
                <p className="data-9">Direcci??n:</p>
                <input
                  type="text"
                  onChange={handleChange}
                  value={restaurantData && restaurantData.address}
                  name="address"
                  id=""
                  className="input-9"
                />
              </div>
            </div>
          </div>
          <div className="conteiner-options">
            <button type="button" onClick={() => regresar()}>
              Regresar
            </button>
      
            <button type="submit">Guardar Datos</button>

            <div>
            {guardar &&
                  <button type="button" onClick={() => reser(restaurantData && restaurantData.reservations)}>Reservaciones</button> 
              }
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default FromEdit;
