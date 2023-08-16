import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Home from '../screens/Home';
import Cart from '../screens/Cart';

const AppStack = () => {
  const Stack = createStackNavigator();

  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      {/* Normally would keep the whole app's routes in a separate file */}
      <Stack.Screen
        name={"Products"}
        component={Home}
        options={{
          title: "Products",
          headerRight: () => (
            <Pressable style={{ marginHorizontal: 20 }} onPress={() => navigation.navigate("Cart")}>
              <Text>Cart</Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name={"Cart"}
        component={Cart}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
