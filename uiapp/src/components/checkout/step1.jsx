import { connect, useSelector, useDispatch } from "react-redux";
import ItemCard from "../../utils/itemCard";
import { removeItemFromCart } from "../cart/redux/cartActions";

const Step1 = ({ removeItemFromCart }) => {
  // const dispatch = useDispatch();
  const cartReducer = useSelector(state => state.cartReducer);
  const { cart, subTotal } = cartReducer;
  const shippingFields = [
    "First Name",
    "Last Name",
    "Address",
    "Apt/Suite (optional)",
    "City",
    "State",
    "Zip Code",
    "Phone (For Delivery)",
    "Email",
  ];
  const shippingInputs = shippingFields.map((field, index) => (
    <input
      type="text"
      name="name"
      key={index}
      style={{ marginBottom: 10 }}
      placeholder={field}
    />
  ));
  const buttonMessage = "Remove Item from Cart";
  // const cartFunction = dispatch(removeItemFromCart);
  const buttonStyles = { width: 150 };
  const cardStyles = {
    display: "flex",
    flexDirection: "column",
    border: "1px solid white",
    padding: 10,
    alignItems: "center",
    width: 150,
  };
  const CartListWrapperComponent =
    cart && cart.length
      ? cart.map((item, index) => {
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
      : null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <div>
        <div style={{ textAlign: "center", marginBottom: 10 }}>
          Shipping Address
        </div>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {shippingInputs}
          <button style={{ marginBottom: 10 }}>Proceed to Billing</button>
        </form>
      </div>

      <div style={{ marginTop: 10 }}>
        <div style={{ marginBottom: 10 }}>{CartListWrapperComponent}</div>
        <div style={{ textAlign: "center", marginBottom: 10 }}>
          Subtotal: ${subTotal}
        </div>
      </div>
    </div>
  );
};

export default connect(null, { removeItemFromCart })(Step1);
