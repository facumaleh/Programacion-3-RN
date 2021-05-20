import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable} from 'react-native'
import { styles } from '../styles'



class App extends Component {

  
    constructor(){
        super();
        this.state = {
          
            isOpen: false,
            likes: 0,


        }
    }


    openModal =  ()=> this.setState({isOpen: true});
      closeModal =  ()=> this.setState({isOpen: false});


  
  
    render(){
      const { img, firstName, lastName,Email,City,State,Street,StreetNumber,Telephone, Country, Bithday,Registered, Date,id} = this.props;


        return(
            <View style={styles.card} key={id}bottomDivider>
                <Image  source={{uri: img}} style={styles.imgCard}  />
                
                 <Text style={styles.Titulo}>{firstName},{lastName}</Text>
                   <Text style={styles.TextoCard} >Location:{City},{State}</Text>
                   <Text style={styles.TextoCard}>Birthdate:{Date.substring(0,10)} </Text>
                   <Text style={styles.TextoCard}>Current age: {Bithday}</Text>
                
                 <Pressable style={styles.button}>
                   <Text style={styles.textPresables}>+ info </Text>
                 </Pressable>
                 <Pressable style={styles.buttonBorrar}>
                   <Text style={styles.textPresables} onPress= {this.props.onDelete.bind(this,id)}>Borrar </Text>
                 </Pressable>
               </View>
               
         

        )
    };
    
}
 
 

export default App;

// colores 
// 00b8a9, f8f3d4,f6416c,ffde7d


    //     