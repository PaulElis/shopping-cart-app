import { combineReducers } from "redux";
import cartReducer from "./components/cart/redux/cartReducer";
import inventoryReducer from "./components/inventory/redux/inventoryReducer";

export default combineReducers({
  cartReducer,
  inventoryReducer,
});
