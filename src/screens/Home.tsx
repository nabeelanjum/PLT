import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import useProducts from "../hooks/useProducts";

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
        renderItem={({ item, index }) => <View />}
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
