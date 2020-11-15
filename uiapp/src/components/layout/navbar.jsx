import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";

const Navbar = () => {
  const cartReducer = useSelector(state => state.cartReducer);
  const { subTotal, cart } = cartReducer;
  const ViewMyCartLink = cart.length ? (
    <Link to="/my-cart">
      Your Cart - ${subTotal.toFixed(2)}, {cart.length} item(s)
    </Link>
  ) : (
    "Empty Cart"
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10,
        borderBottom: "1px solid gold",
      }}
    >
      <Link to="/">Shopping Cart App</Link>
      {ViewMyCartLink}
    </div>
  );
};

export default connect()(Navbar);
