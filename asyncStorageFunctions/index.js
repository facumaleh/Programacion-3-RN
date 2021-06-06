import AsyncStorage from '@react-native-async-storage/async-storage';



export const getDataIndex=async (key)=>{
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch(e) {
    }
    }
  
    export const setDataIndex=async (value,key) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem(key, jsonValue)
        } catch (e) {
        }
      }

      export const storeDataBorrado=async (value,key) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem(key, jsonValue)
        } catch (e) {
        }
      }


      export const getDataBorrado=async (key)=>{
        try {
          const jsonValue = await AsyncStorage.getItem(key)
          return jsonValue != null ? JSON.parse(jsonValue) : [];
        } catch(e) {
        }
        }
      


        export const storeDataFav=async (value,key) => {
          try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
          } catch (e) {
          }
        }
  
  
        export const getDataFav=async (key)=>{
          try {
            const jsonValue = await AsyncStorage.getItem(key)
            return jsonValue != null ? JSON.parse(jsonValue) : [];
          } catch(e) {
          }
          }
      
      

          export const getDataVerMas=async (key)=>{
            try {
              const jsonValue = await AsyncStorage.getItem(key)
              return jsonValue != null ? JSON.parse(jsonValue) : [];
            } catch(e) {
            }
            }
          
            export const setDataVerMas=async (value,key) => {
                try {
                  // const jsonValue = JSON.stringify(value)
                  await AsyncStorage.setItem(key, value)
                } catch (e) {
                }
              }