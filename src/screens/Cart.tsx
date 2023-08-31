import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import ProductInfoTile from "../components/ProductInfoTile";
import useCart from "../hooks/useCart";

const Cart = () => {

  const { itemsInCart } = useCart();

  return (
    <View style={styles.container}>
      <FlatList
        data={itemsInCart}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <ProductInfoTile
            quantityInCart={item.quantity}
            product={item}
          />
        )}
        ListEmptyComponent={() => <Text style={styles.listEmptyText}>No items in the cart</Text>}
      />
    </View>
  );
}

export default Cart;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listEmptyText: {
    marginTop: 100,
    textAlign: "center",
  },
});
