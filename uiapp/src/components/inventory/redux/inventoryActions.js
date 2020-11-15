import {
  ADD_ITEM_BACK_TO_ITEMS_LIST,
  REMOVE_ITEM_FROM_ITEMS_LIST,
} from "./cartTypes";

export const addItemBackToInventory = item => dispatch => {
  dispatch({
    type: ADD_ITEM_BACK_TO_ITEMS_LIST,
    payload: item,
  });
};

export const removeItemFromInventory = item => dispatch => {
  dispatch({
    type: REMOVE_ITEM_FROM_ITEMS_LIST,
    payload: item,
  });
};
