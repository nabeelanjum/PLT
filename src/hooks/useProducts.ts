import { useState } from "react";
import invokeAPI from "../networking";
import { endPoints } from "../networking/constants";

const useProducts = () => {

  const [productsList, setProductsList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const getProductsList = async () => {
    setLoading(true);
    const resp = await invokeAPI({ url: endPoints.products });
    setProductsList(resp || []);
    setLoading(false);
  }

  return {
    getProductsList,
    productsList,
    loading,
  }

}

export default useProducts;
