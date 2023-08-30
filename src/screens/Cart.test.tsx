import React from "react";
import { render } from "@testing-library/react-native";
import Cart from "./Cart";

// Mock the useCart hook for testing
jest.mock("../hooks/useCart", () => ({
  __esModule: true,
  default: () => ({
    itemsInCart: [
      { id: 1, name: "Product A", quantity: 2 },
      { id: 2, name: "Product B", quantity: 1 },
    ],
  }),
}));

// Mock the ProductInfoTile component for testing
jest.mock("../components/ProductInfoTile", () => {
  return function MockProductInfoTile({ product }) {
    return <div data-testid={`product-${product.id}`} />;
  };
});

test("Cart renders correctly with items", () => {
  const { getByTestId } = render(<Cart />);

  // Check if product tiles are rendered for each item in cart
  const productTile1 = getByTestId("product-1");
  const productTile2 = getByTestId("product-2");

  expect(productTile1).toBeTruthy();
  expect(productTile2).toBeTruthy();
});

test("Cart renders 'No items in the cart' when empty", () => {
  // Mock useCart to return an empty cart
  jest.mock("../hooks/useCart", () => ({
    __esModule: true,
    default: () => ({
      itemsInCart: [],
    }),
  }));

  const { getByText } = render(<Cart />);

  // Check if the message for an empty cart is rendered
  const emptyCartMessage = getByText("No items in the cart");
  expect(emptyCartMessage).toBeTruthy();
});
