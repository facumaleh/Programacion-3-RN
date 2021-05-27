import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable} from 'react-native'
import { styles } from '../styles'
import Card from "./Card";
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




class About extends Component {

  
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

    

  
    render(){
      const { search } = this.state;
      const Stack = createStackNavigator();


        return(
          //<NavigationContainer>
          //<Stack.Navigator>

          <ScrollView>
            <SafeAreaView style={styles.container}>
            
        
            <View style={styles.cardAbout} >
                <Image  source={{uri: "https://image.flaticon.com/icons/png/512/921/921071.png"}} style={styles.imgCard}  />
                
                 <Text style={styles.Titulo}>Facundo Maleh</Text>
                   <Text style={styles.TextoCard} >Location: Buenos Aires, Argentina</Text>
                   <Text style={styles.TextoCard}>Birthdate: 21 de febrero del 2001 </Text>
                   <Text style={styles.TextoCard}>Current age: 20</Text>
            
               </View>

            <View style={styles.cardAbout} >
                <Image  source={{uri: "https://img-premium.flaticon.com/png/512/3048/3048122.png?token=exp=1621636898~hmac=d995979e19a3e92ccc52cd14795758ae"}} style={styles.imgCard}  />
                
                 <Text style={styles.Titulo}>Tomas Caimmi</Text>
                   <Text style={styles.TextoCard} >Location: Buenos Aires, Argentina</Text>
                   <Text style={styles.TextoCard}>Birthdate: 22 de enero del 2001 </Text>
                   <Text style={styles.TextoCard}>Current age: 20</Text>
            
               </View>
       

               <View style={styles.cardAbout} >
                <Image  source={{uri: "https://image.flaticon.com/icons/png/512/3048/3048189.png"}} style={styles.imgCard}  />
                
                 <Text style={styles.Titulo}>Agustin Ihidoype</Text>
                   <Text style={styles.TextoCard} >Location: Buenos Aires, Argentina</Text>
                   <Text style={styles.TextoCard}>Birthdate: 5 de junio de 2001  </Text>
                   <Text style={styles.TextoCard}>Current age: 19</Text>
            
               </View>
       
       


            
             
        

          
          </SafeAreaView>
          </ScrollView>
          //</Stack.Navigator>
          //</NavigationContainer>


        )
    };
    
}
 
 

export default About;

// colores 
// 00b8a9, f8f3d4,f6416c,ffde7d