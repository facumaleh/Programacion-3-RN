import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable, Modal, Button} from 'react-native'
import { styles } from '../styles/styles'
import { FontAwesome } from '@expo/vector-icons';



class ModalComponente extends Component {

  
    constructor(){
        super();
        this.state = {
            isOpen: false,
            
        }
    }


    openModal =  ()=> this.setState({isOpen: true});
      closeModal =  ()=> this.setState({isOpen: false});

      
    render(){
      const { img, firstName, lastName,Email,city,State,Street,StreetNumber,Telephone, Country, Bithday,Registered, Date,id} = this.props;


        return(
                  <Modal  animationType="slide" transparent={true} visible={this.state.isOpen} >
               
                  <View style={styles.modal}>
                    <View style={styles.infoModal}>
                    <Image  source={{uri: img}} style={styles.imgCardModal}  />
                    <Text style={styles.TituloModal}>{firstName}, {lastName}</Text>
                    <Text style={styles.TextoModal} >Location: {city}, {State}, {Country}</Text>
                    <Text style={styles.TextoModal}>Birthdate:{Date.substring(0,10)} </Text>
                    <Text style={styles.TextoModal}>Current age: {Bithday}</Text>
                    <Text style={styles.TextoModal}>Telephone: {Telephone}</Text>
                    <Text style={styles.TextoModal}>Registered: {Registered.substring(0,10)}</Text>

                    </View>
                    <Pressable style={styles.infoModal} onPress= {this.closeModal} > 
                    <Text style={styles.goBack}>Go Back</Text>
                    </Pressable>      
                  </View>       
				</Modal>               
        )
    };
    
}

export default ModalComponente;

// colores 
// 00b8a9, f8f3d4,f6416c,ffde7d


    //     