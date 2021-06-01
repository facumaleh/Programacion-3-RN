
    import {setDataIndex,getDataIndex} from "../asyncStorageFunctions/index"

    export const getDataPerson= async ()=> {
    let resultadopedido;
    try {
      const response = await fetch("https://randomuser.me/api/?results=10");
      resultadopedido = await response.json();
      this.setState({ person: resultadopedido.results, personOriginal:resultadopedido.results})
    
       await setDataIndex(resultadopedido.results, '@contacto') 
      console.log( await getDataIndex('@contacto'))

    } catch (error) {
      console.log(error);
      this.setState({ person: [], personOriginal:[]})
    }
   
  }
  
 