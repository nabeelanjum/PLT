import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import ProductInfoTile from "../components/ProductInfoTile";
import useCart from "../hooks/useCart";

const Cart = () => {

  const { itemsInCart } = useCart();

  useEffect(() => {
  }, []);

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
        ListEmptyComponent={() => <Text style={{ marginTop: 100, textAlign: "center" }}>No items in the cart</Text>}
      />
    </View>
  );
}

export default Cart;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
