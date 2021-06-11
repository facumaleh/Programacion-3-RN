
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
 

    export const verMas = async (cantidad)=> {
      try {
      
            fetch('https://randomuser.me/api/?results='+cantidad )
            .then(response => response.json())
            .then ((data)=>{
            setDataIndex(data.results, '@guardado')
            })

  
      } catch (error) {
        console.log(error);
        return [];
      }
     
      }

    