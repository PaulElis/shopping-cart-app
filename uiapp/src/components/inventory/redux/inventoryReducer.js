import {
  ADD_ITEM_BACK_TO_INVENTORY,
  REMOVE_ITEM_FROM_INVENTORY,
} from "./inventoryTypes";
import { inventory } from "./inventory";

const initialState = {
  inventory,
};

export default function inventoryReducer(state = initialState, action) {
  const { type, payload } = action;
  const { inventory } = state;
  let item;
  switch (type) {
    case ADD_ITEM_BACK_TO_INVENTORY:
      return {
        ...state,
        inventory: [...inventory, payload],
      };
    case REMOVE_ITEM_FROM_INVENTORY:
      return {
        ...state,
        inventory: [...inventory, payload],
      };
    default:
      return state;
  }
}
