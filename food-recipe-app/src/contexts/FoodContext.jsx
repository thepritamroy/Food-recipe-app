import { useEffect,useState, createContext , useCallback} from "react";
import { handleFoodApi, handleSearchFoodApi } from "../services/api";
import Ingredients from "../pages/Ingredients";

export const FoodContext = createContext();

function FoodProvider({children}){
  
  const [foods, setFoods] = useState([]);
  const [categorys , setCategorys] = useState(JSON.parse(localStorage.getItem('category')) || null)
  const [favorites , setFavorites] = useState(JSON.parse(localStorage.getItem('favorite')) || []);
  const [ingredientFood , setIngredientFood] = useState(JSON.parse(localStorage.getItem('ingredientFood')) || {})
  const [searchFood , setSearchFood] = useState([]);
  const [searchList , setSearchList] = useState(JSON.parse(localStorage.getItem('searchList')) || null)
  const [searchQuery , setSearchQuery] = useState();
  const [error , setError] = useState(null);
  const [loading , setLoading] = useState(false);
  const [theme , setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || false)

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
    localStorage.setItem('searchList' ,JSON.stringify(searchList))
  },[searchList])

  useEffect(()=>{
    localStorage.setItem('theme' ,JSON.stringify(theme))
  },[theme])


// load foods for Home page (14 array of different categories)
  useEffect(()=>{
    async function loadFoods(){
      try{
        console.log('rendered');
        setLoading(true)
        const foodData = await handleFoodApi();
        setFoods(foodData)
      }catch(error){
        setError('Failed to fetch');
      }finally{
        console.log('finally rendered')
        setLoading(false);
      }
    }

    loadFoods()
  },[])

  // hide when search option when clciked on window
  useEffect(()=>{
    window.addEventListener('click',()=>{
      setSearchFood([])
    })

    return (()=>{
      window.removeEventListener('click',()=>{
        setSearchFood([])
      })
    })
  },[])

  // update category after getting data from api 
  const loadCatergoryFoods = useCallback(async (foodName) => {
    try {
      console.log('Fetching food data...');
      setLoading(true);
      const foodData = await handleSearchFoodApi(foodName);
      setCategorys(foodData);
    } catch (error) {
      console.log(error)
      setError('Failed to fetch');
    } finally {
      setLoading(false);
    }
  }, []);

  // load searches and update searchFood array
  const loadSearchFoods = useCallback(async (foodName) => {
    try {
      if(foodName==='') setSearchFood([]) // to make sure when no input then no search food will display
      if(!foodName) return
      if(!foodName.trim()) return // return if empty space input


      const foodData = await handleSearchFoodApi(foodName);
      setSearchFood(foodData);
    } catch (error) {
      console.log(error)
      setError('Failed to fetch');
    } 
  }, []);
  
// this handles searches when clicked the search button
  const handleSearch = useCallback(async (foodName) => {
    try {
       // to make sure when input field is empty then no search food will display
      if(!foodName) setSearchFood([])
      if(!foodName) return // incase of foodName is undefined, trim will not work
      if(!foodName.trim()) return // return if empty space input


      const foodData = await handleSearchFoodApi(foodName);
      setSearchList(foodData);
      setSearchFood([]);
    } catch (error) {
      console.log(error)
      setError('Failed to fetch');
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

   function handleThemeChange(){
    
    !theme ? setTheme(true) : setTheme(false)
    
   }

   theme? 
   document.body.classList.add('theme-change') : 
   document.body.classList.remove('theme-change')
  







  const value = {
    foods , setFoods,
    categorys , setCategorys, loadCatergoryFoods,
    favorites , setFavorites, handleAddToFav, isFavorite, handleRemoveFromFav,
    searchFood , setSearchFood, loadSearchFoods,
    error , setError,
    loading , setLoading,
    ingredientFood, setIngredientFood, 
    searchQuery , setSearchQuery,
    searchList, setSearchList , handleSearch,
    handleThemeChange
    
  }

  return <FoodContext.Provider value={value}>
      {children}
  </FoodContext.Provider>
}

export default FoodProvider
