import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { Product } from "../common/types";

interface Props {
  product: Product;
  onAddToCart?: (item: Product) => void;
  quantityInCart?: number;
}

const ProductInfoTile: React.FC<Props> = ({ product, onAddToCart, quantityInCart }) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.productInfoContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text>Color: {product.colour}</Text>
          <Text>Price: {product.price}</Text>
        </View>
        {!!product.img && <Image source={{ uri: product.img }} style={styles.productImage} resizeMode="contain" />}
      </View>

      {!!quantityInCart && <Text>Quantity: {quantityInCart}</Text>}
      {!!onAddToCart && (
        <Pressable style={styles.addToCartButton} onPress={() => onAddToCart?.(product)}>
          <Text>Add To Cart</Text>
        </Pressable>
      )}
    </Pressable>
  );
}

export default ProductInfoTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Normally I wouldn't use inline colors but a common colors file, this is just to speed up
    backgroundColor: "white",
    borderRadius: 6,
    margin: 10,
    padding: 15,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 0 },
  },
  productInfoContainer: {
    flexDirection: "row",
  },
  productName: {
    fontSize: 16,
    fontWeight: "500",
  },
  productImage: {
    width: 100,
  },
  addToCartButton: {
    backgroundColor: "cyan",
    padding: 10,
    borderRadius: 4,
    marginTop: 15,
    alignItems: "center",
  }
});
