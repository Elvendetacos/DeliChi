import { useForm } from "react-hook-form";

function FormTableMenu({addMenu}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    addMenu(data)
    e.target.reset()
  };

  return (
    <>
    <div className="conteiner-modal-menu">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="conteiner-modal-menu-1">
        <label className="platillo">Platillo:* </label>
        <input
        className="data-platillo"
          type="text"
          name="alimento"
          id=""
          {...register("alimento", {
            required: { value: true, message: "Campo Requerido" },
          })}
        />
        <p>{errors.alimento?.type === 'required' && "Campo Requerido"}</p>
        {/* <p>{errors.alimento?.type === 'required' && "Campo Requerido"}</p> */}
        <label className="precio">Precio:* </label>
        <input
        className="data-precio"
          type="number"
          name="precio"
          min="1"
          id=""
          {...register("precio", {
            required: { value: true, message: "Campo Requerido" },
          })}
        />
        <p>{errors.precio?.type === 'required' && "Campo Requerido"}</p>
        <button>Agregar a menú</button>
        </div>
      </form>
      </div>
    </>
  );
}

export default FormTableMenu;
