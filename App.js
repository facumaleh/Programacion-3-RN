import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput,} from 'react-native'
import {  ListItem, Button, Icon, Avatar , SearchBar, BottomSheet,Input, Header} from 'react-native-elements'



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
          
          <ScrollView>
            <SafeAreaView>
            <View>
              <SearchBar placeholder="Type Here..." onChangeText={text => this.setState({search: text})} value={search}  onChange={(text) => this.filter(text.target.value)}/>
              <Button  type="outline" onPress={this.az.bind(this)}  title ="A-Z"></Button>
              <Button  type="outline" onPress={this.za.bind(this)}  title ="Z-A"></Button>


            { 
              this.state.person.map((person) => (
                <ListItem key={person.login.uuid} bottomDivider>
                <Avatar rounded  size="large" source={{uri: person.picture.large}} />
                <ListItem.Content>
                  <ListItem.Title>{person.name.first},{person.name.last}</ListItem.Title>
                  <ListItem.Subtitle>Location:{person.location.city},{person.location.state}</ListItem.Subtitle>
                  <ListItem.Subtitle>Birthdate:{person.dob.date.substring(0,10)} </ListItem.Subtitle>
                  <ListItem.Subtitle>Current age: {person.dob.age}</ListItem.Subtitle>
  
                </ListItem.Content>
                <Button
              title="+ info" type="outline"/>
              </ListItem>
              ))
            }
             
             < Input  className = "mas" placeholder="cuantas tarjetas queres sumar?" onChangeText= {text => this.setState({vermas: text})}  />
           <Button  type="outline" onPress={this.loadmore.bind(this)}  title =" Ver mas"></Button> 

          </View>
          </SafeAreaView>
          </ScrollView>
          

        )
    };
    
}

export default App;

