import React, {Component} from "react";
import { View, SafeAreaView, FlatList ,ScrollView,TextInput, Image,Text,Pressable, Button} from 'react-native'
import { styles } from '../styles/styles'
import CardFavoritos from "../componentes/CardFavoritos";
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {getDataFav} from "../asyncStorageFunctions/index"




class Favoritos extends Component {

  
    constructor(){
        super();
        this.state = {
          
            
          personFAV:[],
          person:[],
          resultado:[],

         


        }
    }

    componentDidMount(){
      getDataFav('@Favoritos')
      .then(resultado=> {
       this.setState({personFAV : resultado })
      })
      
   
   }
   componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {            
       getDataFav("@Favoritos")
       .then(resultado=> {
        this.setState({personFAV : resultado })
       });
      });
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
    let resultados =this.state.personFAV.filter((person)=> {
      //  guardo en var resultados el filtro de personBorrada
      return( characteridx!== person.login.uuid )
      //comparo idx con el uuid
    })
    // seteo el estado 
    this.setState({personFAV: resultados})
    }


    Reset=()=>{
      const asyncFun = async () => {
           await AsyncStorage.removeItem('@Borrados');
            }
              asyncFun();
              
              return this.setState({
               personBorrada: []
            })
  
    }
  
    render(){
      

        return(
          
            <SafeAreaView style={styles.container}>
                   
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }} >
            
            <Pressable   style={styles.buttonAZZA}  onPress={this.Reset.bind(this)} >
                <Text> Reset</Text>
              </Pressable>
            

              </View >

              {
                <FlatList
                style={styles.flat}
                data={this.state.personFAV}
                keyExtractor={ (item, idx) => idx.toString()}
    
    
                renderItem={ ({item}) =>
                  (
  
  
              <CardFavoritos
                  //noMasFav= {this.borrarItem.bind(this)}
                  id= {item.login.uuid}
                  firstName={item.name.first}
                  img={item.picture.large}
                  lastName={item.name.last}
                  Email={item.email}
                  city={item.location.city}
                  State={item.location.state}
                  Street={item.location.street.name}
                  StreetNumber={item.location.street.number}
                  Telephone= {item.phone}
                  imgMed={item.picture.medium}
                  Country={item.location.country}
                  Postcode={ item.location.postcode}
                  Bithday= {item.dob.age}
                  Date= {item.dob.date}
                  Registered = {item.registered.date} >
  
                  
              </CardFavoritos>
  
                   )
  
  
              }
              
              />
              }


            {/* { 
              this.state.personFAV.map((person) => (
              <CardFavoritos
                //noMasFav= {this.borrarItem.bind(this)}
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
                </CardFavoritos>
              ))
            } */}

          </SafeAreaView>
          

        )
    };
    
};
 
 

export default Favoritos


