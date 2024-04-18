import { TbShoppingCartPlus } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Item.css";

export function Item(props) {
  const { id, product, handleAddProduct } = props;
  console.log(props.id);
  return (
    <div className="item">
      <Link key={id} to={`/${id}`}>
        <img src={props.image} alt={props.title} width="400" height="300" />
      </Link>

      <span> {props.price}$</span>
      <h5>{props.title}</h5>
      <div className="item-rating-sold">
        <span className="item-star">
          <FaStar />
        </span>
        <span className="item-rating">{props.rating}</span>
        <span className="item-sold"> Куплено: {props.sales} шт</span>
      </div>
      <button onClick={() => handleAddProduct(product)} className={"Active"}>
        <TbShoppingCartPlus />
        {"Добавить в корзину"}
      </button>
    </div>
  );
}

export default Item;
