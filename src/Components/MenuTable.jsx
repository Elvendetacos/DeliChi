function MenuTable({menu, deleteUser}) {
  return (
    <table className="table-menu">
      <thead>
        <tr>
          <th>Platillos</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {menu.length > 0 ? (
          menu.map((item) => (
            <tr key={item.id}>
              <td>{item.alimento}</td>
              <td>{item.precio}</td>
              <td>
                <button onClick={() => {deleteUser(item.id)}}>Eliminar</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>Ningun platillo agregado</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default MenuTable;
