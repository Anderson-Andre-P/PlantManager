import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import colors from "../styles/colors";
import { Welcome } from "../pages/Welcome";
import { UserIdentification } from "../pages/UserIdentification";
import { Confirmation } from "../pages/Confirmation";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    // <NavigationContainer>
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Welcome" component={Welcome} />
      <Screen name="UserIdentification" component={UserIdentification} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
    // </NavigationContainer>
  );
}
