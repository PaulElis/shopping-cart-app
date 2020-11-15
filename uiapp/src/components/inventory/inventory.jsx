import { useState } from "react";
import { inventory } from "./redux/inventory";
import ItemCard from "../../utils/itemCard";
import { addItemToCart } from "../cart/redux/cartActions";
import { connect } from "react-redux";

const Inventory = ({ addItemToCart }) => {
  const [itemList] = useState(inventory);
  const buttonMessage = "Add Item to Cart";
  const buttonStyles = { width: 150 };
  const cardStyles = {
    display: "flex",
    flexDirection: "column",
    border: "1px solid white",
    padding: 10,
    alignItems: "center",
    width: 150,
  };

  const ItemListWrapperComponent =
    itemList &&
    itemList.map((item, index) => {
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
          cartFunction={addItemToCart}
          buttonStyles={buttonStyles}
          cardStyles={cardStyles}
          body={body}
        />
      );
    });

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {ItemListWrapperComponent}
    </div>
  );
};

export default connect(null, { addItemToCart })(Inventory);
