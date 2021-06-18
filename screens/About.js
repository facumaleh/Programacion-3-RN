import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable, Animated, TouchableWithoutFeedback, Easing, Value} from 'react-native'
import { styles } from '../styles/styles'
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
            toValue: 1,
        }



    }

    position = new Animated.Value(0);
    rotation = new Animated.Value(0);

    topDown = () => {
        Animated.parallel([
            Animated.timing(this.rotation, {
                toValue: this.state.toValue,
                duration: 500,
                useNativeDriver: true,
            }),
            // Animated.timing(this.position, {
            // toValue: 100,
            // duration: 1000,
            // useNativeDriver: true,
            // }),
        ]).start();
        this.setState({toValue: this.state.toValue + 1})
    }

    render(){
      const { search } = this.state;
      const Stack = createStackNavigator();

      const rotA = this.rotation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '180deg']
      })

      const rotB = this.rotation.interpolate({
          inputRange: [0, 1],
          outputRange: ['180deg', '0deg']
      })

        return(
          //<NavigationContainer>
          //<Stack.Navigator>

          <ScrollView>
            <SafeAreaView style={styles.container}>
            
            
            <View style={{flex: 1}}>
                <TouchableWithoutFeedback onPress={this.topDown}>
               <Animated.View style={{
                    width: 60,
                    height: 100,
                    backgroundColor: 'red',
                    // backfaceVisibility: 'true',
                    transform: [
                        {translateY: this.position},
                        {rotateY: rotA}
                    ]                   
               }}>
                   <Text>Somos nosotros</Text>
               </Animated.View>
               </TouchableWithoutFeedback>

               <TouchableWithoutFeedback onPress={this.topDown}>
               <Animated.View style={{
                    width: 60,
                    height: 100,
                    backgroundColor: 'gray',
                    backfaceVisibility: 'true',
                    position: 'absolute',
                    transform: [
                        {translateY: this.position},
                        {rotateY: rotB}
                    ]                   
               }}>
                   <Text>Los pibes</Text>
               </Animated.View>
               </TouchableWithoutFeedback>
            </View>

            <View style={styles.cardAbout} >
                <Image  source={{uri: "https://image.flaticon.com/icons/png/512/921/921071.png"}} style={styles.imgCard}  />
                <Text style={styles.Titulo}>Facundo Maleh</Text>
                <Text style={styles.TextoCard} >Location: Buenos Aires, Argentina</Text>
                <Text style={styles.TextoCard}>Birthdate: 21 de febrero del 2001 </Text>
                <Text style={styles.TextoCard}>Current age: 20</Text>
            
            </View>

            <View style={styles.cardAbout} >
                <Image source={{uri: "https://image.flaticon.com/icons/png/512/3334/3334039.png"}} style={styles.imgCard}  />
                <Text style={styles.Titulo}>Tomás Caimmi</Text>
                <Text style={styles.TextoCard} >Location: Buenos Aires, Argentina</Text>
                <Text style={styles.TextoCard}>Birthdate: 22 de enero del 2001 </Text>
                <Text style={styles.TextoCard}>Current age: 20</Text>
            
            </View>
       

            <View style={styles.cardAbout} >
                <Image  source={{uri: "https://image.flaticon.com/icons/png/512/3048/3048189.png"}} style={styles.imgCard}  />
                <Text style={styles.Titulo}>Agustin Ihidoype</Text>
                <Text style={styles.TextoCard} >Location: Buenos Aires, Argentina</Text>
                <Text style={styles.TextoCard}>Birthdate: 5 de junio de 2001  </Text>
                <Text style={styles.TextoCard}>Current age: 20</Text>
            
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