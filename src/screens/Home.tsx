import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import useProducts from "../hooks/useProducts";
import ProductInfoTile from "../components/ProductInfoTile";

const Home = () => {

  const { getProductsList, productsList, loading } = useProducts();

  useEffect(() => {
    getProductsList();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={productsList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductInfoTile product={item} />}
        refreshing={loading}
        onRefresh={getProductsList}
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
