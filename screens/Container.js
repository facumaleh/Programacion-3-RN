import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable, Button,FlatList,ActivityIndicator} from 'react-native'
import { styles } from '../styles/styles'
import Card from "../componentes/Card";
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {getDataIndex, setDataIndex,storeDataBorrado,getDataBorrado,getDataFav,storeDataFav} from "../asyncStorageFunctions/index"
import {getDataPerson} from '../api/api'


class Container extends Component {

  
    constructor(){
        super();
        this.state = {
          
            text: '',
            person: [],
            search: '',
            person: [],
            visible: 6,
            personOriginal:[],
            textoBuscar: " ",
            vermas: 0,
            personBorrada:[],
            personFAV:[],
            resultado:[],
            activity:false,

        }
    }

   componentDidMount(){
    getDataPerson()
    .then(resultado=> {
     this.setState({person : resultado })
    })
    
 
 }

    loadmore(){
      if (!this.state.vermas) {
        return alert ("Ingrese un numero valido")
      }
      fetch('https://randomuser.me/api/?results='+ this.state.vermas)
      .then(response => response.json())
      .then ((data)=>{
      this.state.person= [...this.state.person, ...data.results]
      console.log(this.state.person)
      this.setState({person: this.state.person})
      })
      .catch((e)=>console.log(e));}


    az = () => {
      this.state.person.sort((a, b) => a.name.first.localeCompare(b.name.first))
      this.setState({person: this.state.person.sort(function(a, b) { return a.name.first > b.name.first})})
    } 
    za = () => {
      this.state.person.sort((a, b) => b.name.first.localeCompare(a.name.first))
      this.setState({person: this.state.person.sort(function(a, b) { return a.name.first < b.name.first})})
    }

    //  buscador
    filter(text){
    if (text.length > 0) {
       // var text = target.value
      const personajes = this.state.person
      const filtrado = personajes.filter((item) =>{

      const itemData = item.name.first.toUpperCase()
      const lastName = item.name.last.toUpperCase()
      const age = item.dob.age.toString()
      const textData = text.toUpperCase()
      console.log(age);
      return (
      itemData.includes(textData) || lastName.includes(textData) || age.includes(textData)
           // comparo name o last name o age con el valor ingresado .
       )})
      this.setState({
        //sete el estado de person con lo filtrado
          person: filtrado,
          textoBuscar: text,
      })
      } else {
      this.setState({
     // si no busco nada queda igual

       person:this.state.personOriginal}) 
      }
      }
      updateSearch = (text) => {
      const personajes = this.state.person
      const filtrado = personajes.filter((item) =>{
      const itemData = item.name.first.toUpperCase();
      const lastName = item.name.last.toUpperCase();
      const age = item.dob.age.toString();
      const textData = this.state.search.toUpperCase();
    //this.setState({ search });
      return (
      itemData.includes(textData) || lastName.includes(textData) || age.includes(textData)
     // comparo name o last name o age con el valor ingresado .
      )

       })};

      async borrarItem(characteridx) {
 
      try {
      let resultados =this.state.person.filter((person)=> {
        //  guardo en var resultados el filtro de person
      return( characteridx!== person.login.uuid )
        //comparo idx con el uuid
      })
      
      
      let Borrado =this.state.person.filter((person)=> {
        //   guardo en var borraos el filtro de person  
      return( characteridx== person.login.uuid )
                 })
      // this.setState({personBorrada:Borrado})

      // seteo el estado 
      this.setState({person: resultados})

      let arrayNuevo = await getDataBorrado("@Borrados")

      let canDelete = true;

      for (let i = 0; i < arrayNuevo.length; i++) {
        
        if(arrayNuevo[i] == Borrado[0]){
          canDelete = false;
        }
      }

      if (canDelete){
        arrayNuevo.push(Borrado[0])
      }
      

      this.setState({personBorrada: arrayNuevo})
        // setea bien el estado

      await storeDataBorrado(arrayNuevo, '@Borrados') 
      // console.log( await getDataBorrado('@Borrados'))
  
      } catch (e) {
      console.log(e);
      this.setState({ personBorrada:[]})
       }
   
   
      }

      

    

      async FAV(characteridx) {
      try {
      let Favoritos =this.state.person.filter((person)=> {
          //   //  guardo en var resultados el filtro de person  
      return( characteridx== person.login.uuid )
                   })
      this.setState({personBorrada:Favoritos})

      console.log(this.state.personFAV)
          // setea bien el estado
  
      await storeDataFav(Favoritos, '@Favoritos') 
      console.log( await getDataFav('@Favoritos')) }
      catch (error) {
      console.log(error);
      this.setState({ personBorrada:[]})
      }}
  
      
  


  
      render(){
      const { search } = this.state;
      const { navigation } = this.props;
      return(
          
          <SafeAreaView style={styles.container}>
            
          
          <TextInput style={styles.SearchBar} placeholder="Search" onChangeText={text => {this.setState({search: text}); this.filter(text) }} value={search}  />
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }} >
          <Pressable style={styles.buttonAZZA}   onPress={this.az.bind(this)} >
          <FontAwesome name="sort-alpha-asc" size={20} color="#f6416c" />
          </Pressable>
          <Pressable   style={styles.buttonAZZA}  onPress={this.za.bind(this)} >
          <FontAwesome name="sort-alpha-desc" size={20} color="#f6416c" />
          </Pressable>
           </View >
          {this.state.activity
          ?<ActivityIndicator
          color= "blue"
           size={60} />
          :
           <FlatList style={styles.flat}
            data={this.state.person}
            keyExtractor={ (item, idx) => idx.toString()}
            renderItem={ ({item}) =>
              (

          
                <Card
                  key={item.login.uuid}
                  onDelete= {this.borrarItem.bind(this)}
                  onFav= {this.FAV.bind(this)}
  

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
                  Registered = {item.registered.date}
                  >
  
                  </Card>
                  
                )
                


            }


          />
        }


             
          < TextInput  style={styles.input}   keyboardType="numeric" className = "mas" placeholder="Ingresar numero de tarjetas" onChangeText= {text => this.setState({vermas: text})}  />
          <Pressable  style={styles.buttonVerMas}  onPress={this.loadmore.bind(this)}  >
          <Text style={styles.textPresables}   > Ver más</Text>
          </Pressable> 

          
          </SafeAreaView>
           )
           };
           };
            export default Container


// colores 
// 00b8a9, f8f3d4,f6416c,ffde7d