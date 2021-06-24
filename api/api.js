
    import {setDataIndex,getDataIndex, getDataVerMas} from "../asyncStorageFunctions/index"

    export const getDataPerson= async ()=> {
    let resultadopedido;
    try {
      const response = await fetch("https://deelay.me/250/randomuser.me/api/?results=3");
      resultadopedido = await response.json();
      return resultadopedido.results;

    } catch (error) {
      console.log(error);
      return [];
    }
   
    }
 

    export const verMasApi = async (cantidad)=> {
      try {
        const response = await fetch("https://randomuser.me/api/?results="+ cantidad);
        cardsVerMas = await response.json();
        return cardsVerMas.results;
            
  
      } catch (error) {
        console.log(error);
        return [];
      }
     
      }

      
    