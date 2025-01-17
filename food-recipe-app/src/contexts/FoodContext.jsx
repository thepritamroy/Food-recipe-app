import { useState } from "react";
import { createContext } from "react";

export const FoodContext = createContext();

function FoodProvider({children}){
  
  const [foods, setFoods] = useState([])

  const value = {
    foods , setFoods
  }

  return <FoodContext.Provider value={value}>
      {children}
  </FoodContext.Provider>
}

export default FoodProvider
