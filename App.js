import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput,} from 'react-native'
import {  ListItem, Button, Icon, Avatar , SearchBar, BottomSheet } from 'react-native-elements'



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


   //buscador
  //  filter(text){
  //   if (text!== 0) {
      
   
  //    // var text = target.value
  //     const personajes = this.state.person
  //     const filtrado = personajes.filter((item) =>{

  //         const itemData = item.name.first.toUpperCase()
  //         const lastName = item.name.last.toUpperCase()
  //         const age = item.dob.age.toString()
  //         const textData = text.toUpperCase()
  //         console.log(age);
  //         return (
  //           itemData.includes(textData) || lastName.includes(textData) || age.includes(textData)
  //          // comparo name o last name o age con el valor ingresado .
  //         )
  //     })
  //     this.setState({
  //       //sete el estado de person con lo filtrado
  //         person: filtrado,
  //         textoBuscar: text,
  //     })
  //  } else this.setState({
  //    // si no busco nada queda igual
  //   person:this.state.personoriginal
  // })  }


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
              <SearchBar placeholder="Type Here..." onChangeText={text => this.setState({search: text})} value={search}/>
              


            { 
              this.state.person.map((person) => (
                <ListItem key={person.login.uuid} bottomDivider>
                <Avatar  size="large" source={{uri: person.picture.large}} />
                <ListItem.Content>
                  <ListItem.Title>Name:{person.name.first},{person.name.last}</ListItem.Title>
                  <ListItem.Subtitle>Location:{person.location.city},{person.location.state}</ListItem.Subtitle>
                  <ListItem.Subtitle>Birthdate:{person.dob.date.substring(0,10)} </ListItem.Subtitle>
                  <ListItem.Subtitle>Current age: {person.dob.age}</ListItem.Subtitle>
  
                </ListItem.Content>
                <Button
              title="+ info" type="outline"/>
              </ListItem>
              ))
            }
            
          </View>
          </SafeAreaView>
          </ScrollView>
          

        )
    };
    
}

export default App;