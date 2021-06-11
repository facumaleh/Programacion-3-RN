
    import {setDataIndex,getDataIndex, getDataVerMas} from "../asyncStorageFunctions/index"

    export const getDataPerson= async ()=> {
    let resultadopedido;
    try {
      const response = await fetch("https://deelay.me/250/randomuser.me/api/?results=10");
      resultadopedido = await response.json();
      return resultadopedido.results;

    } catch (error) {
      console.log(error);
      return [];
    }
   
    }
 

    export const loadMore = async ()=> {
      let nueva = '';
      getDataVerMas('@VerMas')
      .then(resultado=> {
        console.log("este es el numero " + resultado)
        nueva = resultado
        
      })


      try {

            fetch('https://randomuser.me/api/?results='+ nueva)
            .then(response => response.json())
            .then ((data)=>{
              console.log("test")
              console.log(data)
              setDataIndex(data, '@guardado')
            })



  
      } catch (error) {
        console.log(error);
        return [];
      }
     
      }

    // loadmore(){
    //   // setDataVerMas(this.state.vermas, '@verMas') 
    //   if (!this.state.vermas) {
    //     return alert ("Ingrese un numero valido")
    //   }
    //   fetch('https://randomuser.me/api/?results='+ this.state.vermas)
    //   .then(response => response.json())
    //   .then ((data)=>{
    //   this.state.person= [...this.state.person, ...data.results]
    //   console.log(this.state.person)
    //   this.setState({person: this.state.person})
    //   })
    //   .catch((e)=>console.log(e));}