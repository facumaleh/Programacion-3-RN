import React, {Component} from "react";
import Container from "./src/Container";
import About from "./src/About";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './routes/homeStack'
import { SafeAreaView } from "react-native";


const Stack = createStackNavigator();


class App extends Component {

 constructor(){
        super();
        this.state = {

        }
    }



    render(){
        return(
        //  <Container></Container>
         // <About></About>
         <SafeAreaView style={{flex:1}}>
        <AppNavigator />
        </SafeAreaView>
        )
    };
    
}
 
export default App;

// colores 
// 00b8a9, f8f3d4,f6416c,ffde7d