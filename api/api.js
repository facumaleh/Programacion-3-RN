
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
      
      getDataVerMas('@VerMas')
      .then(resultado=> {
        console.log("esta es la nueva")
        this.setState({vermas : resultado})
      })

      try {

            fetch('https://randomuser.me/api/?results='+ resultado)
            console.log("https://randomuser.me/api/?results="+ resultado)

            .then(response => response.json())
            .then ((data)=>{
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