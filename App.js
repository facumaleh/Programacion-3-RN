import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable} from 'react-native'
import {  ListItem,  Icon, Avatar , SearchBar, BottomSheet,Input, Header} from 'react-native-elements'



class App extends Component {

  
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
         


        }
    }

    //solicitud api
componentDidMount(){
  fetch('https://randomuser.me/api/?results=10')
  .then(response => response.json())
  .then ((data)=>{
    this.setState({ person: data.results, personOriginal:data.results});
    console.log(this.state.person)

  })
  .catch((e)=>console.log(e));
  }
  loadmore(){
    // busco el classname de mas para meter en la url

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

  //  buscador
   filter(text){
     console.log(text)
    if (text.length > 0) {
      
   console.log("hola")

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
          )
      })
      this.setState({
        //sete el estado de person con lo filtrado
          person: filtrado,
          textoBuscar: text,
      })
   } else {
     this.setState({
     // si no busco nada queda igual

     person:this.state.personOriginal
   })
  }}


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

  
    render(){
      const { search } = this.state;


        return(
          
          <ScrollView >
            <SafeAreaView style={styles.container}>
            <View  >
              <TextInput  style={styles.Search} placeholder="Search" onChangeText={text => this.setState({search: text})} value={search}  onChange={(text) => this.filter(text.target.value)}/>
              <Pressable style={styles.button}   onPress={this.az.bind(this)} >
                <Text style={styles.textPresables} > A-Z
                </Text>
              </Pressable>
              <Pressable   style={styles.button}  onPress={this.za.bind(this)} >
              <Text style={styles.textPresables} > Z-A </Text>
              </Pressable>


            { 
              this.state.person.map((person) => (
              
              <View style={styles.card} key={person.login.uuid} bottomDivider>
                <Image  source={{uri: person.picture.large}} style={styles.imgCard}  />
                
                <Text style={styles.Titulo}>{person.name.first},{person.name.last}</Text>
                  <Text style={styles.TextoCard} >Location:{person.location.city},{person.location.state}</Text>
                  <Text style={styles.TextoCard}>Birthdate:{person.dob.date.substring(0,10)} </Text>
                  <Text style={styles.TextoCard}>Current age: {person.dob.age}</Text>
                
                <Pressable style={styles.button}>
                  <Text style={styles.textPresables}>+ info </Text>
                </Pressable>
              </View>
              ))
            }
             
             < TextInput  style={styles.input}  className = "mas" placeholder="cuantas tarjetas queres sumar?" onChangeText= {text => this.setState({vermas: text})}  />
           <Pressable  style={styles.button}  onPress={this.loadmore.bind(this)}  >
            <Text style={styles.textPresables}> Ver mas</Text>
            </Pressable> 

          </View>
          </SafeAreaView>
          </ScrollView>
          

        )
    };
    
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    with:100
    
  },
  card: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: 'red',
    width: 300,
    height: 400,
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'azure', 

  },
  imgCard:{
    width: 150, 
    height: 150, 
    borderRadius: 10,
   marginLeft: 50
  },
input:{
  height: 40,
  backgroundColor: 'azure', 
  fontSize: 20,
  borderWidth: 3,
  borderRadius: 10,
  borderColor: 'red',
  marginTop: 10,
  marginBottom: 10,
  with :100

},
Titulo:{
 fontSize: 25,
 marginTop: 10,
 marginBottom: 10,
},

TextoCard:{
  fontSize: 15,
  marginTop: 10,
  marginBottom: 10,
 
 
 },
 Search: {
  height: 40,
  borderWidth: 1,
  paddingLeft: 20,
  margin: 5,
  borderColor: 'red',
  backgroundColor: '#FFFFFF',
  marginTop: 10,
  marginBottom: 10,
  borderWidth: 3,
  borderRadius: 10,
  backgroundColor: 'azure', 
  
},
button: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  elevation: 3,
  backgroundColor: 'azure', 
  marginTop: 10,
  borderWidth: 3,
  borderRadius: 10,
  borderColor: 'red',
},
textPresables: {
  fontSize: 16,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: 'black',
},
};
 
 

export default App;

