import "./CSS/Order.css";

export function Order({ order }) {
  return (
    <div className="order-items">
      <h2>Заказы:</h2>

      <div>
        <table
          border={1}
          cellPadding={1}
          cellSpacing={1}
          className="order-table"
        >
          <tr>
            <th>Наименование товара</th>
            <th>Количество</th>
            <th>Цена</th>
          </tr>

          {order?.map((item) => {
            return (
              <>
                <tr>
                  <td> {item.title} </td>
                  <td align="center">{item.quantity}</td>
                  <td>{item.price * item.quantity}$</td>
                </tr>
              </>
            );
          })}
        </table>
        <p>
          Общая сумма:
          {order
            .map((item) => item.price * item.quantity)
            .reduce((total, value) => total + value, 0)}{" "}
          $
        </p>
      </div>
    </div>
  );
}
