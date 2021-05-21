import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable, Modal, Button} from 'react-native'
import { styles } from '../styles'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



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
      const { img, firstName, lastName,Email,city,State,Street,StreetNumber,Telephone, Country, Bithday,Registered, Date,id} = this.props;


        return(
            <View style={styles.card} key={id}bottomDivider>
                <Image  source={{uri: img}} style={styles.imgCard}  />
                
                 <Text style={styles.Titulo}>{firstName},{lastName}</Text>
                   <Text style={styles.TextoCard} >Location: {city}, {State}, {Country}</Text>
                   <Text style={styles.TextoCard}>Birthdate:{Date.substring(0,10)} </Text>
                   <Text style={styles.TextoCard}>Current age: {Bithday}</Text>
                
                 <Pressable style={styles.button}  onPress= {this.openModal}>
                 <AntDesign name="infocirlce" size={24} color="#00b8a9" />
                 </Pressable>
                    
                 
                          
                  <Modal  animationType="slide" style={{backgroundColor: 'black'}} visible={this.state.isOpen} >
                  <View style={styles.modal}>
                    <Pressable onPress={this.closeModal}>
                    <AntDesign name="closesquare" size={24} color="#00b8a9" />
                    </Pressable>
                    <View style={styles.infoModal}>
                    <Image  source={{uri: img}} style={styles.imgCard}  />
                    <Text style={styles.Titulo}>{firstName}, {lastName}</Text>
                    <Text style={styles.TextoCard} >Location: {city}, {State}, {Country}</Text>
                    <Text style={styles.TextoCard}>Birthdate:{Date.substring(0,10)} </Text>
                    <Text style={styles.TextoCard}>Current age: {Bithday}</Text>
                    </View>
                    <Pressable  onPress= {this.closeModal} > 
                    <AntDesign name="stepbackward" size={24} color="#00b8a9" />
                    </Pressable>      
                  </View>          
							    </Modal>


                 <Pressable style={styles.buttonBorrar} onPress= {this.props.onDelete.bind(this,id)}>
                 <FontAwesome  name="trash" size={24} color="#f6416c" onPress= {this.props.onDelete.bind(this,id)} />
                 </Pressable>
               </View>
        )
    };
    
}

export default App;

// colores 
// 00b8a9, f8f3d4,f6416c,ffde7d


    //     