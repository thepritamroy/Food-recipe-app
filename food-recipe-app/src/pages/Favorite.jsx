import { useContext } from "react";
import { FoodContext } from "../contexts/FoodContext";
import FoodComponent from "../components/FoodComponent";
import '../css/favorite.css'

const Favorite = () => {
  const {favorites, loading, error} = useContext(FoodContext);

  return (
    <div className="Main-conatiner">

      {loading ? <h3 className="loading">Loading... 😁</h3> : ''}
      {error ? <h3 className="error">{error}😔</h3> : ''}

      {favorites.length!==0 ? 
        <div className="food-container">
          {favorites.map((favorite)=><FoodComponent key = {favorite.idMeal} food={favorite}/>)}
        </div> : 
        <div className='fav-empty-des'>
          <h2>No Favorite Foods Yet</h2>
          <p>Start adding Foods to your favorites and they will appear here!</p>
        </div> }
    </div>
  )
}

export default Favorite