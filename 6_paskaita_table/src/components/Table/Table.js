import "./Table.css";

const Table = (props) => {
  const orders = props.children;

  return (
    <table className="orders-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>People</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id} onClick={props.createConfirmModal} id={order.id}>
            <td>{order.id}</td>
            <td>{order.people}</td>
            <td>{order.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
