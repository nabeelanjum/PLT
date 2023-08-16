import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';

const AppStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      {/* Normally would keep the whole app's routes in a separate file */}
      <Stack.Screen name={"Products"} component={Home} options={{ title: "Products" }} />
    </Stack.Navigator>
  );
}

export default AppStack;
