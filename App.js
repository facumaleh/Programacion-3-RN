import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable} from 'react-native'
import { styles } from './styles'
import Container from "./src/Container";
import About from "./src/About";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './routes/homeStack'

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
        <AppNavigator />
        )
    };
    
}
 
export default App;

// colores 
// 00b8a9, f8f3d4,f6416c,ffde7d