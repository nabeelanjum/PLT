import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

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
        renderItem={({ item }) => <ProductInfoTile product={item} />}
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
