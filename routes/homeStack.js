import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../src/About";
import Container from "../src/Container"
import Papelera from "../src/Papelera"


const { Navigator, Screen } = createStackNavigator();
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Container} />
      <Tab.Screen name="Settings" component={About} />
      <Tab.Screen name="Papelera" component={Papelera} />

    </Tab.Navigator>
  );
}

//en el header se puede poner: "float", "screen"
const HomeNavigator = () => (
  <Tab.Navigator headerMode="screen"> 
    <Screen name="Home" component={Container} />
    <Screen name="About" component={About} />
    <Screen name="Papelera" component={Papelera} />

  </Tab.Navigator>
);


const AppNavigator= () => (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );

export default AppNavigator 