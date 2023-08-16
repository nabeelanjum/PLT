export const BASE_URL = "https://my-json-server.typicode.com/benirvingplt/products/";

export const endPoints = {
  products: "products",
  menu: "menu",
  product_details: (id: string) => `products/${id}`
}
