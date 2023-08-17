import { Product } from "../../common/types";
import { ITEM_ADDED } from "../actionTypes";

type State = {
  items: Product[],
}

const initialState: State = {
  items: []
}

const cart = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case ITEM_ADDED: {
      // Of course calculating stuff here isn't a good idea, should be actions but doing so to quickly complete this assignment
      const existingItems = [...state.items];
      const existingItem = existingItems.find(item => item.id === payload.id);
      if (existingItem) {
        existingItem.quantity = existingItem.quantity + 1;
      } else {
        existingItems.push({ ...payload, quantity: 1 });
      }
      return {
        ...state,
        items: existingItems
      }
    }
    default:
      return state;
  }
}

export default cart;
