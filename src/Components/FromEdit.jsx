import "../assets/Styles/RestaurantEdit.css";
import { useEffect, useRef, useState } from "react";
import AddImage from "../assets/Img/add-image.png";
import CardImage from "../Cards/CardImage";

const imageType = /image\/(png|jpg|jpeg|svg)/i;
const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;

function FromEdit({setHorarioModal, setMenuModal, setEstabModal}) {
  const [profile, setProfile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const [banner, setBanner] = useState(null);
  const [fileBannerURL, setFileBannerURL] = useState(null);
  const [imageFiles, setImageFiles] = useState([]);
  const [images, setImages] = useState([]);

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

  useEffect(() => {
    resourcesView();
    bannerView();
    profileView();
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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
                <input type="text" name="" id="" className="input-1" />
                <p className="data-2">Telefono:</p>
                <input type="number" name="" id="" className="input-2" />
                <p className="data-3">Descripción:</p>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="input-3"
                ></textarea>
                <p className="data-4">Tipo de cocina:</p>
                <select className="input-4">
                  <option value="default">-Seleccione su cocina-</option>
                  <option value="1">Chiapaneca</option>
                  <option value="2">Mexicana</option>
                  <option value="3">Extranjera</option>
                  <option value="4">Rural</option>
                  <option value="5">Mixto</option>
                </select>
                <p className="data-5">Horarios:</p>
                <input
                  type="button"
                  className="input-5"
                  value="Agregar Horarios"
                  onClick={()=> setHorarioModal(true)}
                />
                <p className="data-6">Menú:</p>
                <input type="button" className="input-6" value="Agregar Menú" onClick={()=> setMenuModal(true)} />
                <p className="data-7">Alojamiento:</p>
                <input
                  type="button"
                  className="input-7"
                  value="Agregar Alojamiento"
                  onClick={()=> setEstabModal(true)}
                />
                <p className="data-8">Zona:</p>
                <select className="input-8">
                  <option value="">-Seleccione su zona-</option>
                </select>
                <p className="data-9">Dirección:</p>
                <input type="text" name="" id="" className="input-9" />
              </div>
            </div>
          </div>
          <div className="conteiner-options">
            <button type="button">Regresar</button>
            <button type="button">Editar</button>
            <button type="submit">Guardar Datos</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default FromEdit;
