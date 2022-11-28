import "../assets/Styles/RestaurantEdit.css";
import { useEffect, useRef, useState, useContext} from "react";
import AddImage from "../assets/Img/add-image.png";
import CardImage from "../Cards/CardImage";
import Contexto from "../Contextos/ContextoCeo";
import { useNavigate } from "react-router-dom";
import ContextoRestaurant from "../Contextos/ContextoRestaurant";
import axios from "axios";
import ModalEdit from "./ModalEdit"
const imageType = /image\/(png|jpg|jpeg|svg)/i;
const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;


function FromEdit({setMesa, setPerson, setHorarioG, setMenuEdit, setHorarioModal, setMenuModal, setEstabModal, menu, hora, numberTable, capacityTable }) {

  const [restaurantData, setRestaurantData] = useState({});
  const {idRestaurant} = useContext(ContextoRestaurant);
  const a = useNavigate()
  const profile1 = useRef(null)

  const MenuF = JSON.stringify(menu)

  const banner1 = useRef(null)

  const { id } = useContext(Contexto)
  const [profile, setProfile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const [banner, setBanner] = useState(null);
  const [fileBannerURL, setFileBannerURL] = useState(null);
  const [imageFiles, setImageFiles] = useState([]);
  const [images, setImages] = useState([]);
  const [zone, setZone] = useState([])
  const [zoneEdit, setZoneEdit] = useState()
  const form = useRef(null);
  const tipoComida = useRef(null)
  const tipoZona = useRef(null) 
  const [reservacion, setReservacion] = useState([])

  const handleChange = (event) => {
    if(event.target.name === "zona"){
      if(zoneEdit === zoneEdit){
        const newzone = event.target.value
        setZoneEdit(newzone)
      }
    }else{
      setRestaurantData({...restaurantData, [event.target.name]:event.target.value})
    }
  }
  
  const loadData = () => {
    fetch(`http://localhost:8080/restaurant/${idRestaurant}`, {
      method: "GET", headers: {
          Accept: "aplication/json",
          "Content-Type": "Aplication/json"
      }, mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
      },

  })
      .then((response) => {return response.json()})
      .then((respuesta => {
        console.log(respuesta.data);
        setRestaurantData(respuesta.data),
        setReservacion(respuesta.data.reservations),
        setZoneEdit(respuesta.data.zone.id)}))
      .catch((error) => {
          console.error('Error:', error);
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
      method: "GET", headers: {
          Accept: "aplication/json",
          "Content-Type": "Aplication/json"
      }, mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
      },

  })
      .then((response) => {return response.json()})
      .then((respuesta => setZone(respuesta.data)))
      .catch((error) => {
          console.error('Error:', error);
      });
  }

  useEffect(()=>{
    if(idRestaurant != undefined){
      loadData();
    }
  }, [])

  useEffect(() => {
    zonesData();
    resourcesView();
    bannerView();
    profileView();
  },[{ profile, banner, imageFiles}]);

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

  const handleSubmit = (event) => {  
    event.preventDefault();

    const formData = new FormData(form.current);

    if(idRestaurant == undefined){
      fetch(`http://localhost:8080/restaurant/ceo/${id}/zone/${tipoZona.current.value}`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name:formData.get("name"),
          phoneNumber:formData.get("phoneNumber"),
          address:formData.get("address"),
          schedule:hora,
          kitchen: tipoComida.current.value,
          description:formData.get("description"),
          menu:MenuF,
          tableNumber:numberTable,
          tableCapacity:capacityTable
          }),
      })
      .then((response) => response.json())
      .then((respuest) => {console.log(respuest.data.id),
            a('/List')})
      .catch((error) => {
        alert("hay un error"+ error);
      });
    }else{

      fetch(`http://localhost:8080/restaurant/${idRestaurant}/zone/${tipoZona.current.value}`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name:formData.get("name"),
          phoneNumber:formData.get("phoneNumber"),
          address:formData.get("address"),
          schedule:hora,
          kitchen: tipoComida.current.value,
          description:formData.get("description"),
          menu:MenuF,
          tableNumber:numberTable,
          tableCapacity:capacityTable
          }),
      })
      .then((response) => response.json())
      .then((respuest) => console.log(respuest.data.id))
      .catch((error) => {
        console.error("Error:", error);

      });
    }
}

const regresar = () => {
  a('/List');
}

const loadHorario = (horario) => {
  setHorarioG(horario);
  setHorarioModal(true);

}

const loadMenu = (menu) =>{
  setMenuEdit(menu);
  setMenuModal(true);
}

const loadAloj = (mesa, person) =>{
  setMesa(mesa);
  setPerson(person);
  setEstabModal(true)
}

const [openModal,setOpenModal] = useState (false)
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
                        {images.map((image, idx) => (
                          <CardImage key={idx} resources={image} />
                        ))}
                      </div>
                      <label className="addreferences" htmlFor="references">
                        <img src={AddImage} alt="" />
                      </label>
                      <input
                        type="file"
                        id="references"
                        onChange={changeResources}
                        multiple
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
                <input type="text" value={restaurantData && restaurantData.name} onChange={handleChange} name="name" id="" className="input-1"/>
                <p className="data-2">Telefono:</p>
                <input type="number"  value={restaurantData && restaurantData.phoneNumber} onChange={handleChange} name="phoneNumber" id="" className="input-2" />
                <p className="data-3">Descripción:</p>
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
                <select className="input-4" ref={tipoComida} onChange={handleChange} name="kitchen" value={restaurantData && restaurantData.kitchen}>
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
                  onClick={()=> loadHorario(restaurantData && restaurantData.schedule)}
                  onChange={handleChange}
                />
                <p className="data-6">Menú:</p>
                <input type="button" className="input-6" value="Agregar Menú" onClick={()=> loadMenu(restaurantData && restaurantData.menu)} />
                <p className="data-7">Alojamiento:</p>
                <input
                  onChange={handleChange}
                  type="button"
                  className="input-7"
                  value="Agregar Alojamiento"
                  onClick={()=> loadAloj(restaurantData && restaurantData.tableNumber, restaurantData && restaurantData.tableCapacity)}
                />
                <p className="data-8">Zona:</p>
                <select className="input-8" name="zona" value={zoneEdit && zoneEdit} onChange={handleChange} ref={tipoZona}>
                  <option value="default">-Seleccione su zona-</option>
                  {
                    zone.map((item) => (
                      <option value={item.id}>{item.name}</option>
                    ))
                  }
                </select>
                <p className="data-9">Dirección:</p>
                <input type="text" onChange={handleChange} value={restaurantData && restaurantData.address} name="address" id="" className="input-9" />
              </div>
            </div>
          </div>
          <div className="conteiner-options">
            <button type="button" onClick={()=>regresar()}>Regresar</button>
            <button type="reset">Editar</button>
            <button type="submit">Guardar Datos</button>
            
            <div>
            <button onClick={() => setOpenModal(true)}>Reservaciones</button>
            <ModalEdit reservacion={reservacion} open={openModal } onClose ={() => setOpenModal(false)}/>
            </div>
            
          </div>
          
        </div>
        
      </form>
      
    </>
  );
}

export default FromEdit;
