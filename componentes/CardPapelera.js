import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable, Modal, Button} from 'react-native'
import { styles } from '../styles/styles'
import { FontAwesome } from '@expo/vector-icons';
import ModalComponente from '../componentes/Modal'



class CardPapelera extends Component {

  
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
      const { img, firstName, lastName,Email,city,State,Street,StreetNumber,Telephone, Country, Bithday,Registered, Date,id,key} = this.props;


        return(
            <View style={styles.card} key={id}bottomDivider>
                <Image  source={{uri: img}} style={styles.imgCard}  />
                
                 <Text style={styles.Titulo}>{firstName},{lastName}</Text>
                   <Text style={styles.TextoCard} >Location: {city}, {State}, {Country}</Text>
                   <Text style={styles.TextoCard}>Birthdate:{Date.substring(0,10)} </Text>
                   <Text style={styles.TextoCard}>Current age: {Bithday}</Text>
                
     
                 
                   <Pressable style={styles.button}  onPress= {this.openModal}>
                 <FontAwesome name="info-circle" size={24} color="#00b8a9" />
                 </Pressable>
                 <Pressable style={styles.buttonBorrar} onPress= {this.props.onDelete.bind(this,id)}>
                 <FontAwesome  name="trash" size={24} color="#f6416c"  />
                 </Pressable>
                    
                 
                          
                 <ModalComponente
                  isOpenClose={this.state.isOpen}
                  close= {this.closeModal.bind(this)}
                  key={key}
                  img={img}
                  firstName={firstName}
                   lastName={lastName}
                   Email={Email}
                   city={city}
                   State={Street}
                   StreetNumber={StreetNumber}
                   Telephone={Telephone}
                   Country={Country}
                   Bithday={Bithday}
                   Registered={Registered} 
                   Date={Date}
                   id={id}
                 
                 />
               </View>
        )
    };
    
}

export default CardPapelera;

// colores 
// 00b8a9, f8f3d4,f6416c,ffde7d


    //     