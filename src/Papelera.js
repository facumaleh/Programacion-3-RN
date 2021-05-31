import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable, Button} from 'react-native'
import { styles } from '../styles'
import CardPapelera from "./CardPapelera";
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {getDataBorrado} from "./asyncStorageFunctions"




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

   

    az = () => {
      this.state.person.sort((a, b) => a.name.first.localeCompare(b.name.first))
      this.setState({
          person: this.state.person.sort(function(a, b) { return a.name.first > b.name.first})
      })
  }
  za = () => {
    this.state.person.sort((a, b) => b.name.first.localeCompare(a.name.first))
    this.setState({
        person: this.state.person.sort(function(a, b) { return a.name.first < b.name.first})
    })
  }

  borrarItem(characteridx){
    console.log( characteridx);
    let resultados =this.state.person.filter((person)=> {
      //  guardo en var resultados el filtro de person
      return( characteridx!== person.login.uuid )
      //comparo idx con el uuid
    })
    // seteo el estado 
    this.setState({person: resultados})
    
  }


  
  
    render(){

        return(
          
          <ScrollView>
            <SafeAreaView style={styles.container}>
                   
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }} >
              
              <Pressable style={styles.buttonAZZA}   onPress={this.az.bind(this)} >
              <FontAwesome name="sort-alpha-asc" size={20} color="#f6416c" />
              </Pressable>
              <Pressable   style={styles.buttonAZZA}  onPress={this.za.bind(this)} >
              <FontAwesome name="sort-alpha-desc" size={20} color="#f6416c" />
               </Pressable>

              </View >


            { 
              this.state.personBorrada.map((person) => (
              <CardPapelera
              key={person.login.uuid}
              onDeletePapelera= {this.borrarItem.bind(this)}
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