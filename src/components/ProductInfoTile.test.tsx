import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ProductInfoTile from "./ProductInfoTile";

// Mock the Product object for testing
const mockProduct = {
  id: "test123",
  name: "Test Product",
  colour: "Red",
  price: 19.99,
  img: "https://example.com/product.png",
  quantity: 1,
};

test("ProductInfoTile renders correctly", () => {
  const { getByText, getByTestId } = render(
    <ProductInfoTile product={mockProduct} />
  );

  // Check if the product details are rendered
  const productName = getByText("Test Product");
  const colorText = getByText("Color: Red");
  const priceText = getByText("Price: 19.99");
  const image = getByTestId("product-image");

  expect(productName).toBeTruthy();
  expect(colorText).toBeTruthy();
  expect(priceText).toBeTruthy();
  expect(image).toBeTruthy();
});

test("Add To Cart button calls onAddToCart callback", () => {
  const mockOnAddToCart = jest.fn();
  const { getByText } = render(
    <ProductInfoTile product={mockProduct} onAddToCart={mockOnAddToCart} />
  );

  // Find the "Add To Cart" button and simulate a press event
  const addToCartButton = getByText("Add To Cart");
  fireEvent.press(addToCartButton);

  // Verify if the callback was called with the correct product
  expect(mockOnAddToCart).toHaveBeenCalledWith(mockProduct);
});
