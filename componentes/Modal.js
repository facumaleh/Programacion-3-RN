import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable, Modal, Button, TouchableOpacity} from 'react-native'
import { styles } from '../styles/styles'
import { FontAwesome } from '@expo/vector-icons';



class ModalComponente extends Component {
  
    constructor(){
        super();
        this.state = {
          isOpen: false,
          text: '',
          textHandler: '',
        }
    }
    render(){
      const { img, firstName, lastName,Email,city,State,Street,StreetNumber,Telephone, Country, Bithday,Registered, Date,id} = this.props;

        return(
        
                  <Modal  animationType="slide" transparent={true} visible={this.props.isOpenClose} >
               
                  <View style={styles.modal}>
                    <View style={styles.infoModal}>
                    <Image  source={{uri: img}} style={styles.imgCardModal}  />
                    <Text style={styles.TituloModal}>{firstName}, {lastName}</Text>
                    <Text style={styles.TextoModal} >Location: {city}, {State}, {Country}</Text>
                    <Text style={styles.TextoModal}>Birthdate:{Date.substring(0,10)} </Text>
                    <Text style={styles.TextoModal}>Current age: {Bithday}</Text>
                    <Text style={styles.TextoModal}>Telephone: {Telephone}</Text>
                    <Text style={styles.TextoModal}>Registered: {Registered.substring(0,10)}</Text>
                    <Text style={styles.TextoModal}>Comentario: {this.state.text}</Text>
                    <TextInput style={styles.textInput} onChangeText={value => this.setState({textHandler: value})}/>
                    <TouchableOpacity onPress={() => this.setState({text: this.state.textHandler})}>
                      <View>
                          <Text style={styles.mostrarTexto}>Mostrar texto</Text>
                      </View>
                    </TouchableOpacity>

                   </View>
                    <Pressable style={styles.infoModal}  onPress= {this.props.close.bind(this)} > 
                    <Text style={styles.goBack}>Go Back</Text>
                    </Pressable>      
                  </View>       
				</Modal>               
        )
    };
    
}

export default ModalComponente;

