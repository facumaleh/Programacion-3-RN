import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import Container from "../screens/Container"
import Papelera from "../screens/Papelera"
import Favoritos from "../screens/Favoritos"



const { Navigator, Screen } = createStackNavigator();
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


//en el header se puede poner: "float", "screen"
const HomeNavigator = () => (
  <Tab.Navigator headerMode="screen"> 
    <Screen name="Home" component={Container} />
    <Screen name="About" component={About} />
    <Screen name="Papelera" component={Papelera} />
    <Screen name="Favoritos" component={Favoritos} />

  </Tab.Navigator>
);


const AppNavigator= () => (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );

export default AppNavigator 