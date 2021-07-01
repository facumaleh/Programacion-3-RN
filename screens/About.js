import React, {Component} from "react";
import { View, SafeAreaView ,ScrollView,TextInput, Image,Text,Pressable, Animated, TouchableWithoutFeedback, Easing, Value, Button} from 'react-native'
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
            toValueTitle: 1.5,
            valueVaca: 200,
        }



    }

    positionV = new Animated.Value(20);
    position = new Animated.Value(1);
    rotation = new Animated.Value(0);

    moverVaca = () => {
        Animated.timing(this.positionV, {
            toValue: this.state.valueVaca,
            duration: 500,
            useNativeDriver: true,
            easing: Easing.linear
        }).start();
        if (this.state.valueVaca == 20){
            this.setState({valueVaca: 200})
        } else {
            this.setState({valueVaca: 20})
        }
    }

    topDown = () => {
        Animated.timing(this.rotation, {
            toValue: this.state.toValue,
            duration: 500,
            useNativeDriver: false,
        }).start();
        this.setState({toValue: this.state.toValue + 1})
    }

    expandir = () => {
        Animated.timing(this.position, {
            toValueTitle: this.state.toValueTitle,
            duration: 500,
            easing: Easing.elastic(4),
            useNativeDriver: false,
        }).start();
        if (this.state.toValueTitle == 1.5){
            this.setState({toValueTitle: 1})
        } else {
            this.setState({toValueTitle: 1.5})
        }
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

            
                <View style={{width: 400, flex: 1}}>
                <Button title="mueve" onPress={this.moverVaca}/>
                    <Animated.Image style={{
                            height: 100,
                            width: 100,
                            transform: [
                                {translateX: this.positionV}
                            ]
                        }}
                        source={{uri:  "https://static.wixstatic.com/media/2cd43b_1a0dc766603340b5a4c62ea0cbf3c113~mv2.png/v1/fill/w_320,h_278,q_90/2cd43b_1a0dc766603340b5a4c62ea0cbf3c113~mv2.png"}}>
                    </Animated.Image>
                </View>
           



            <View style={styles.cardAbout} >

                {/* Image */}
               <TouchableWithoutFeedback onPress={this.topDown}>
                    <Animated.View id={0} style={{
                            backfaceVisibility: 'true',
                            position: 'relative',
                            transform: [
                                {rotateY: rotA}
                            ]                   
                    }}>
                        <Image source={{uri:  "https://image.flaticon.com/icons/png/512/3048/3048122.png"}} style={styles.imgCardAbout} />
                    </Animated.View>
               </TouchableWithoutFeedback>

               <TouchableWithoutFeedback onPress={this.topDown}>
                    <Animated.View style={{
                            marginTop: 20,
                            backfaceVisibility: 'true',
                            position: 'absolute',
                            transform: [
                                {rotateY: rotB}
                            ]                   
                    }}>
                        <Image source={{uri: "https://image.flaticon.com/icons/png/512/3048/3048122.png"}} style={styles.imgCardAbout2} /> 
                    </Animated.View>
               </TouchableWithoutFeedback>
               {/* Image */}

                <TouchableWithoutFeedback onLongPress={this.expandir}>
                    <View>
                        <Animated.Text style={{...styles.Titulo, ...{
                            transform: [
                                {scale: this.state.toValueTitle}
                            ]
                        }}}>Facundo Maleh</Animated.Text>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.TextoCard} >Location: Buenos Aires, Argentina</Text>
                <Text style={styles.TextoCard}>Birthdate: 21 de febrero del 2001 </Text>
                <Text style={styles.TextoCard}>Current age: 20</Text>
            
            </View>

            <View style={styles.cardAbout} >

                {/* Image */}
               <TouchableWithoutFeedback onLongPress={this.topDown}>
                    <Animated.View id={1} style={{
                            backfaceVisibility: 'true',
                            position: 'relative',
                            transform: [
                                {rotateY: rotA}
                            ]                   
                    }}>
                        <Image source={{uri: "https://image.flaticon.com/icons/png/512/3334/3334039.png"}} style={styles.imgCardAbout} />
                    </Animated.View>
               </TouchableWithoutFeedback>

               <TouchableWithoutFeedback onLongPress ={this.topDown}>
                    <Animated.View style={{
                            marginTop: 20,
                            backfaceVisibility: 'true',
                            position: 'absolute',
                            transform: [
                                {rotateY: rotB}
                            ]                   
                    }}>
                        <Image source={{uri: "https://image.flaticon.com/icons/png/512/3334/3334039.png"}} style={styles.imgCardAbout2} /> 
                    </Animated.View>
               </TouchableWithoutFeedback>
               {/* Image */}

               <TouchableWithoutFeedback onPress={this.expandir}>
                    <View>
                        <Animated.Text style={{...styles.Titulo, ...{
                            transform: [
                                {scale: this.state.toValueTitle}
                            ]
                        }}}>Tomás Caimmi</Animated.Text>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.TextoCard} >Location: Buenos Aires, Argentina</Text>
                <Text style={styles.TextoCard}>Birthdate: 22 de enero del 2001 </Text>
                <Text style={styles.TextoCard}>Current age: 20</Text>
            
            </View>
       

            <View style={styles.cardAbout} >

                {/* Image */}
               <TouchableWithoutFeedback onPress={this.topDown}>
                    <Animated.View id={2} style={{
                            backfaceVisibility: 'true',
                            position: 'relative',
                            transform: [
                                {rotateY: rotA}
                            ]                   
                    }}>
                        <Image source={{uri: "https://image.flaticon.com/icons/png/512/3048/3048189.png"}} style={styles.imgCardAbout} />
                    </Animated.View>
               </TouchableWithoutFeedback>

               <TouchableWithoutFeedback onPress={this.topDown}>
                    <Animated.View style={{
                            marginTop: 20,
                            backfaceVisibility: 'true',
                            position: 'absolute',
                            transform: [
                                {rotateY: rotB}
                            ]                   
                    }}>
                        <Image source={{uri: "https://image.flaticon.com/icons/png/512/3048/3048189.png"}} style={styles.imgCardAbout2} /> 
                    </Animated.View>
               </TouchableWithoutFeedback>
               {/* Image */}

               <TouchableWithoutFeedback onPress={this.expandir}>
                    <View>
                        <Animated.Text style={{...styles.Titulo, ...{
                            transform: [
                                {scale: this.state.toValueTitle}
                            ]
                        }}}>Agustín Ihidoype</Animated.Text>
                    </View>
                </TouchableWithoutFeedback>
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
