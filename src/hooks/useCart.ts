import { useDispatch, useSelector } from "react-redux";
import { Product } from "../common/types";
import { ITEM_ADDED } from "../store/actions/actionTypes";

const useCart = () => {

  const dispatch = useDispatch();

  const itemsInCart: Product[] = useSelector((state: any) => state.cart?.items);

  const addItemToCart = (item: Product) => {
    dispatch({ type: ITEM_ADDED, payload: item });
  }

  return {
    itemsInCart,
    addItemToCart,
  }

}

export default useCart;
