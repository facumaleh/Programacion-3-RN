import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // width:200,
    backgroundColor:"#ffde7d"
  },

  card: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#00b8a9',
    width: 350,
    height: 500,
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#f8f3d4', 
  },

  imgCard:{
    width: 150, 
    height: 150, 
    borderRadius: 10,
   marginLeft: 75
  },

  input:{
  height: 50,
  backgroundColor: 'azure', 
  fontSize: 20,
  borderWidth: 3,
  borderRadius: 10,
  borderColor: '#00b8a9',
  marginTop: 10,
  marginBottom: 10,
  width:400,
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
  height: 50,
  width:350,
  borderWidth: 1,
  paddingLeft: 20,
  margin: 5,
  borderColor: '#00b8a9',
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
  borderWidth: 3,
  borderRadius: 10,
  borderColor: '#00b8a9',
  // width:400
},
buttonBorrar: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  elevation: 3,
  backgroundColor: 'azure', 
  marginTop: 10,
  borderWidth: 3,
  borderRadius: 10,
  borderColor: '#f6416c',
  // width:400
},


buttonVerMas: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  elevation: 3,
  backgroundColor: 'azure', 
  marginTop: 10,
  borderWidth: 3,
  borderRadius: 10,
  borderColor: '#00b8a9',
   width:400
},

buttonAZZA: {
  flex: 1, 
  marginLeft:10,
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  elevation: 3,
  backgroundColor: 'azure', 
  marginTop: 10,
  borderWidth: 3,
  borderRadius: 10,
  borderColor: '#f6416c',
},

textPresables: {
  fontSize: 16,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: 'black',
  }
});
 export {styles}  