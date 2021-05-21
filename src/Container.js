import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable} from 'react-native'
import { styles } from '../styles'
import Card from "./Card";
import { FontAwesome } from '@expo/vector-icons';




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
      const { search } = this.state;


        return(
          
          <ScrollView>
            <SafeAreaView style={styles.container}>
            
              <TextInput style={styles.SearchBar} placeholder="Search" onChangeText={text => this.setState({search: text})} value={search}  onChange={(text) => this.filter(text.target.value)}/>
             
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }} >
              
              <Pressable style={styles.buttonAZZA}   onPress={this.az.bind(this)} >
              <FontAwesome name="sort-alpha-asc" size={20} color="#f6416c" />
              </Pressable>
              <Pressable   style={styles.buttonAZZA}  onPress={this.za.bind(this)} >
              <FontAwesome name="sort-alpha-desc" size={20} color="#f6416c" />
               </Pressable>

              </View >


            { 
              this.state.person.map((person) => (
              <Card
              key={person.login.uuid}
              onDelete= {this.borrarItem.bind(this)}
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

                
                </Card>
              ))
            }
             
             < TextInput  style={styles.input}  className = "mas" placeholder="Ingresar numero de tarjetas" onChangeText= {text => this.setState({vermas: text})}  />
           <Pressable  style={styles.buttonVerMas}  onPress={this.loadmore.bind(this)}  >
            <Text style={styles.textPresables}> Ver mas</Text>
            </Pressable> 

          
          </SafeAreaView>
          </ScrollView>
          

        )
    };
    
}
 
 

export default Container;

// colores 
// 00b8a9, f8f3d4,f6416c,ffde7d