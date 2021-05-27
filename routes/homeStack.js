import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../src/About";
import Container from "../src/Container"



const { Navigator, Screen } = createStackNavigator();

//en el header se puede poner: "float", "screen"
const HomeNavigator = () => (
  <Navigator headerMode="screen"> 
    <Screen name="Home" component={Container} />
    <Screen name="About" component={About} />
  </Navigator>
);


const AppNavigator= () => (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );

export default AppNavigator 