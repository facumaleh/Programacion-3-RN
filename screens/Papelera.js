import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable, Button, FlatList} from 'react-native'
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
            resultado:[],


         


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
          
            <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }} >
             
              <Pressable   style={styles.buttonAZZA}  onPress={this.Reset.bind(this)} >
                <Text> Reset</Text>
              </Pressable>

            </View >
            <View style={styles.container}></View>

             
            
            {
              <FlatList
              style={styles.flat}
              data={this.state.person}
              keyExtractor={ (item, idx) => idx.toString()}
  
  
              renderItem={ ({item}) =>
                (


            <CardPapelera
                onDelete= {this.borrarItem.bind(this)}
                key={item.login.uuid}
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

                
            </CardPapelera>

                 )


            }
            
            />
          }





          </SafeAreaView>
          

        )
    };
    
};
 
 

export default Papelera


// colores 
// 00b8a9, f8f3d4,f6416c,ffde7d