import { StyleSheet} from "react-native";

const styles =StyleSheet.create( {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      with:100
      
    },
    card: {
      borderWidth: 3,
      borderRadius: 10,
      borderColor: 'red',
      width: 300,
      height: 450,
      padding: 20,
      marginTop: 10,
      marginBottom: 10,
      backgroundColor: 'azure', 
  
    },
    imgCard:{
      width: 150, 
      height: 150, 
      borderRadius: 10,
     marginLeft: 50
    },
  input:{
    height: 40,
    backgroundColor: 'azure', 
    fontSize: 20,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: 'red',
    marginTop: 10,
    marginBottom: 10,
    with :100
  
  },
  Titulo:{
   fontSize: 25,
   marginTop: 10,
   marginBottom: 10,
  },
  
  TextoCard:{
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
},
   SearchBar: {
    height: 60,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: 'red',
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: 'azure', 
    
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: 'azure', 
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'red',
  },
  textPresables: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  
  });
 export {styles,TextoCard,textPresables,button,SearchBar,TextoCard,Titulo,input,imgCard,card,container}  