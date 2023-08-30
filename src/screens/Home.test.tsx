import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Home from "./Home";

// Mock the useProducts and useCart hooks for testing
jest.mock("../hooks/useProducts", () => ({
  __esModule: true,
  default: () => ({
    getProductsList: jest.fn(),
    productsList: [
      { id: 1, name: "Product A", colour: "Red", price: 19.99 },
      { id: 2, name: "Product B", colour: "Blue", price: 24.99 },
    ],
    loading: false,
  }),
}));

jest.mock("../hooks/useCart", () => ({
  __esModule: true,
  default: () => ({
    addItemToCart: jest.fn(),
  }),
}));

test("Home renders correctly with products", () => {
  const { getByText, getByTestId } = render(<Home />);

  // Check if product tiles are rendered for each product
  const productTile1 = getByTestId("product-1");
  const productTile2 = getByTestId("product-2");

  expect(productTile1).toBeTruthy();
  expect(productTile2).toBeTruthy();
});

test("Add To Cart button calls addItemToCart with correct product", () => {
  const { getByText } = render(<Home />);

  // Find the "Add To Cart" button for the first product and simulate a press event
  const addToCartButton = getByText("Add To Cart");
  fireEvent.press(addToCartButton);

  // Verify if the addItemToCart function was called with the correct product
  expect(addToCartButton).toHaveBeenCalledWith({ id: 1, name: "Product A", colour: "Red", price: 19.99 });
});
