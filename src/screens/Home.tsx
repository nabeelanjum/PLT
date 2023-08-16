import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import useProducts from "../hooks/useProducts";
import ProductInfoTile from "../components/ProductInfoTile";

const Home = () => {

  const { getProductsList, productsList } = useProducts();

  useEffect(() => {
    getProductsList();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={productsList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductInfoTile product={item} />}
      />
    </View>
  );
}

export default Home;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
