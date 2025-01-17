import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { handleFoodApi } from "../services/api";

export const FoodContext = createContext();

function FoodProvider({children}){
  
  const [foods, setFoods] = useState([]);
  const [categorys , setCategorys] = useState([])
  const [favorites , setFavorites] = useState([]);
  const [searchFood , setSearchFood] = useState('');



  useEffect(()=>{
    async function loadFoods(){
      const foodData = await handleFoodApi();
      setFoods(foodData)
    }

    loadFoods()
  },[])







  const value = {
    foods , setFoods,
    categorys , setCategorys,
    favorites , setFavorites,
    searchFood , setSearchFood,
  }

  return <FoodContext.Provider value={value}>
      {children}
  </FoodContext.Provider>
}

export default FoodProvider
