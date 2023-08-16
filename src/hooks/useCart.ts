import { useSelector } from "react-redux";

const useCart = () => {

  const itemsInCart = useSelector((state: any) => state.cart?.items);

  return {
    itemsInCart,
  }

}

export default useCart;
