import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable} from 'react-native'
import { styles } from '../styles'
import Card from "./Card";
import { FontAwesome } from '@expo/vector-icons';




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


        return(
          
          <ScrollView>
            <SafeAreaView style={styles.container}>
            
        
            <View style={styles.card} >
                <Image  source={{uri: "https://as.com/futbol/imagenes/2021/05/20/primera/1621501526_610460_1621501727_noticia_normal_recorte1.jpg"}} style={styles.imgCard}  />
                
                 <Text style={styles.Titulo}>Facundo Maleh</Text>
                   <Text style={styles.TextoCard} >Location: Buenos Aires, Argentina</Text>
                   <Text style={styles.TextoCard}>Birthdate: 21 de febrero del 2001 </Text>
                   <Text style={styles.TextoCard}>Current age: 20</Text>
            
               </View>

            <View style={styles.card} >
                <Image  source={{uri: "https://as.com/futbol/imagenes/2021/05/20/primera/1621501526_610460_1621501727_noticia_normal_recorte1.jpg"}} style={styles.imgCard}  />
                
                 <Text style={styles.Titulo}>Tomas Caimmi</Text>
                   <Text style={styles.TextoCard} >Location: Buenos Aires, Argentina</Text>
                   <Text style={styles.TextoCard}>Birthdate: 22 de enero del 2001 </Text>
                   <Text style={styles.TextoCard}>Current age: 20</Text>
            
               </View>
       

               <View style={styles.card} >
                <Image  source={{uri: "https://as.com/futbol/imagenes/2021/05/20/primera/1621501526_610460_1621501727_noticia_normal_recorte1.jpg"}} style={styles.imgCard}  />
                
                 <Text style={styles.Titulo}>Agustin ihidoype</Text>
                   <Text style={styles.TextoCard} >Location: Buenos Aires, Argentina</Text>
                   <Text style={styles.TextoCard}>Birthdate: 24 de junio de 1987 </Text>
                   <Text style={styles.TextoCard}>Current age: 33</Text>
            
               </View>
       
       


            
             
        

          
          </SafeAreaView>
          </ScrollView>
          

        )
    };
    
}
 
 

export default About;

// colores 
// 00b8a9, f8f3d4,f6416c,ffde7d