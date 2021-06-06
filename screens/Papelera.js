import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable, Button} from 'react-native'
import { styles } from '../styles/styles'
import CardPapelera from "../componentes/CardPapelera";
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {getDataBorrado} from "../asyncStorageFunctions/index"


class Papelera extends Component {

  
    constructor(){
        super();
        this.state = {
          
            
            personBorrada:[],
            person:[],

         


        }
    }
    
componentDidMount(){
   getDataBorrado('@Borrados')
   .then(resultado=> {
    this.setState({personBorrada : resultado })
   })
   

}


// componentDidUpdate(){
//   getDataBorrado('@Borrados')
//   .then(resultado=> {
//    this.setState({personBorrada : resultado })
//   })
//  }


   

  Reset=()=>{
    const asyncFun = async () => {
         await AsyncStorage.removeItem('@Borrados');
          }
            asyncFun();
            
          //   return this.setState({
          //    personBorrada: []
          // })

  }
  
  borrarItem(characteridx){
    console.log( characteridx);
    let resultados =this.state.personBorrada.filter((person)=> {
      //  guardo en var resultados el filtro de personBorrada
      return( characteridx!== person.login.uuid )
      //comparo idx con el uuid
    })
    // seteo el estado 
    this.setState({personBorrada: resultados})
    }

    render(){

        return(
          
          <ScrollView>
            <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }} >
             
              <Pressable   style={styles.buttonAZZA}  onPress={this.Reset.bind(this)} >
                <Text> Reset</Text>
              </Pressable>

            </View >
            <View style={styles.container}></View>

            { 
              this.state.personBorrada.map((person) => (
              <CardPapelera
              onDelete= {this.borrarItem.bind(this)}
                key={person.login.uuid}
                id= {person.login.uuid}
                firstName={person.name.first}
                img={person.picture.large}
                lastName={person.name.last}
                Email={person.email}
                city={person.location.city}
                State={person.location.state}
                Street={person.location.street.name}
                StreetNumber={person.location.street.number}
                Telephone= {person.phone}
                imgMed={person.picture.medium}
                Country={person.location.country}
                Postcode={ person.location.postcode}
                Bithday= {person.dob.age}
                Date= {person.dob.date}
                Registered = {person.registered.date}>

                
                </CardPapelera>
              ))
            } 
           
          </SafeAreaView>
          </ScrollView>
          

        )
    };
    
};
 
 

export default Papelera


// colores 
// 00b8a9, f8f3d4,f6416c,ffde7d