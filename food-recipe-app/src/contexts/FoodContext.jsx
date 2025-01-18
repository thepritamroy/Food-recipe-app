import { useEffect,useState, createContext , useCallback} from "react";
import { handleFoodApi, handleSearchFoodApi } from "../services/api";
import Ingredients from "../pages/Ingredients";

export const FoodContext = createContext();

function FoodProvider({children}){
  
  const [foods, setFoods] = useState([]);
  const [categorys , setCategorys] = useState(JSON.parse(localStorage.getItem('category')) || [])
  const [favorites , setFavorites] = useState(JSON.parse(localStorage.getItem('favorite')) || []);
  const [ingredientFood , setIngredientFood] = useState(JSON.parse(localStorage.getItem('ingredientFood')) || {})
  const [searchFood , setSearchFood] = useState('');
  const [error , setError] = useState(null);
  const [loading , setLoading] = useState(false);

  useEffect(()=>{
    localStorage.setItem('category' ,JSON.stringify(categorys))
  },[categorys])

  useEffect(()=>{
    localStorage.setItem('favorite' ,JSON.stringify(favorites))
  },[favorites])

  useEffect(()=>{
    localStorage.setItem('ingredientFood' ,JSON.stringify(ingredientFood))
  },[ingredientFood])



  useEffect(()=>{
    async function loadFoods(){
      try{
        setLoading(true)
        const foodData = await handleFoodApi();
        setFoods(foodData)
      }catch(error){
        setError('Failed to fetch');
      }finally{
        setLoading(false);
      }
    }

    loadFoods()
  },[])

  
  const loadCatergoryFoods = useCallback(async (searchFood) => {
    try {
      console.log('Fetching food data...');
      setLoading(true);
      const foodData = await handleSearchFoodApi(searchFood);
      setCategorys(foodData);
    } catch (error) {
      console.log(error)
      setError('Failed to fetch');
    } finally {
      setLoading(false);
    }
  }, []);


  

    function handleAddToFav(food){
      setFavorites((f)=>[...f,food]) 
    }

    function handleRemoveFromFav(foodId){
      setFavorites(()=>favorites.filter((favorite,i)=>foodId!==favorite.idMeal))
    }

    function isFavorite(foodId){
      return favorites.some((favorite)=>foodId===favorite.idMeal)
   }


  







  const value = {
    foods , setFoods,
    categorys , setCategorys, loadCatergoryFoods,
    favorites , setFavorites, handleAddToFav, isFavorite, handleRemoveFromFav,
    searchFood , setSearchFood,
    error , setError,
    loading , setLoading,
    ingredientFood, setIngredientFood, 
  }

  return <FoodContext.Provider value={value}>
      {children}
  </FoodContext.Provider>
}

export default FoodProvider
