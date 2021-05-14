import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput,} from 'react-native'
import {  ListItem, Button, Icon, Avatar , SearchBar} from 'react-native-elements'



class App extends Component {

  
    constructor(){
        super();
        this.state = {
          
            person: [],
            search: '',

        }
    }

    //solicitud api
componentDidMount(){
  fetch('https://randomuser.me/api/?results=10')
  .then(response => response.json())
  .then ((data)=>{
    this.setState({ person: data.results});
    console.log(this.state.person)

  })
  .catch((e)=>console.log(e));
  }
  updateSearch = (search) => {
    this.setState({ search });
  };

  
    render(){



      
        return(
          
          <ScrollView>
            <SafeAreaView>
            <View>
              <SearchBar placeholder="Type Here..." onChangeText={this.updateSearch}value={this.state.search}/>
        
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
    }
    
}

export default App;