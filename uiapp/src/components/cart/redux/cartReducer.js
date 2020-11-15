import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "./cartTypes";

const initialState = {
  cart: [],
  subTotal: 0,
  itemNumber: 0,
};

export default function cartReducer(state = initialState, action) {
  const { type, payload } = action;
  const { cart, subTotal } = state;
  switch (type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: [...cart, payload],
        subTotal: subTotal + payload.price,
      };
    case REMOVE_ITEM_FROM_CART:
      console.log("payload: ", payload);
      return {
        ...state,
        cart: state.cart.filter(cart => cart.id !== payload.id),
        subTotal: subTotal - payload.price,
      };
    default:
      return state;
  }
}
