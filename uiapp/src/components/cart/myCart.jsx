import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemCard from "../../utils/itemCard";
import { removeItemFromCart } from "./redux/cartActions";

const MyCart = ({ removeItemFromCart }) => {
  const cartReducer = useSelector(state => state.cartReducer);
  const { subTotal, cart } = cartReducer;
  const buttonMessage = "Remove Item from Cart";
  const buttonStyles = { width: 150 };
  const cardStyles = {
    display: "flex",
    flexDirection: "column",
    border: "1px solid white",
    padding: "10px",
    alignItems: "center",
    width: 150,
  };
  const CartListWrapperComponent =
    cart && cart.length ? (
      cart.map((item, index) => {
        const { itemName, skuNumber, price, availability } = item;
        const body = (
          <div>
            <div>{itemName}</div>
            <div>#SKU: {skuNumber}</div>
            <div>${price}</div>
            <div>{availability}</div>
          </div>
        );
        return (
          <ItemCard
            item={item}
            key={index}
            buttonMessage={buttonMessage}
            cartFunction={removeItemFromCart}
            buttonStyles={buttonStyles}
            cardStyles={cardStyles}
            body={body}
          />
        );
      })
    ) : (
      <div style={{ textAlign: "center" }}>No Items in your Cart!</div>
    );
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div>Subtotal - ${subTotal.toFixed(2)}</div>
        <Link to="/checkout">Checkout</Link>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {CartListWrapperComponent}
      </div>
    </div>
  );
};

export default connect(null, { removeItemFromCart })(MyCart);
