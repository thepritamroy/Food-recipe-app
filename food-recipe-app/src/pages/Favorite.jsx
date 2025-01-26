import { useContext } from "react";
import { FoodContext } from "../contexts/FoodContext";
import FoodComponent from "../components/FoodComponent";
import '../css/favorite.css'

const Favorite = () => {
  const {favorites, loading, error} = useContext(FoodContext);

  return (
    <div className="Main-conatiner">

      {loading ? <h3 className="loading">Loading... 😁</h3> : ''}
      {error ? 
      <div className="error">
        <div className="error-dog-img">
          <img src="../src/assets/internet-dog-error.png" alt="error Image" />
        </div>
        <div className="error-text">
          <h1>Oops!</h1>
          <h1>No internet</h1>
          <p>Please check your internet connection</p>
        </div>
      </div> : ''}

      {favorites.length!==0 && !loading && !error? 
        <div className="food-container">
          {favorites.map((favorite)=><FoodComponent key = {favorite.idMeal} food={favorite}/>)}
        </div> : (!loading && !error? <div className='fav-empty-des'>
          <h2>No Favorite Foods Yet</h2>
          <p>Start adding Foods to your favorites and they will appear here!</p>
        </div> : '')
         }
    </div>
  )
}

export default Favorite