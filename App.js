import React, {Component} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './routes/homeStack'
import { SafeAreaView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator();


class App extends Component {

 constructor(){
        super();
        this.state = {}
    }

    // componentDidMount(){
    //     const asyncFun = async () => {
    //         await AsyncStorage.removeItem('@Borrados');
    //     }
    //     asyncFun();
    // }


    render(){
        return(
        <SafeAreaView style={{flex:1}}>
         <AppNavigator />
        </SafeAreaView>
        )
    };
    
}
 
export default App;

// colores 
// 00b8a9, f8f3d4,f6416c,ffde7d