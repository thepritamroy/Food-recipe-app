import { useContext } from 'react';
import '../css/FoodComponent.css'
import {Link, useLocation} from 'react-router-dom'
import { FoodContext } from '../contexts/FoodContext';

const FoodComponent = (props) => {
  const food = props.food;
  
  const location = useLocation()

  const {loadCatergoryFoods,setIngredientFood, handleAddToFav,isFavorite, handleRemoveFromFav} = useContext(FoodContext);
  const favorite = isFavorite(food.idMeal)

  function handleFav(){
    if(favorite){
      handleRemoveFromFav(food.idMeal)
    }else{
      handleAddToFav(food)
    }
  }

  return (
    <div className={`food-box ${location.pathname === '/' ? 'food-box-active' : ''}`} >
          <div className="food-img">
            <Link to={`${location.pathname === '/' ? '/category' : '/ingredient'}`}>
              <img src={food.strCategoryThumb || food.strMealThumb} 
                alt="Image" 
                onClick={location.pathname === '/' ? 
                ()=>loadCatergoryFoods(food.strCategory) : 
                ()=>setIngredientFood(food)}/>
            </Link>
          </div>
          <div className="food-category">
            <h3>{location.pathname==='/' ? food.strCategory : food.strMeal}</h3>
          </div>
          <div className={`fav-button ${favorite ? 'active' : ''}`} 
          onClick={handleFav}>
            {location.pathname !=='/' ?
            <i className='fa-solid fa-heart'></i> : ''}
          </div>
          <div className="country">
            <h3>{food.strArea}</h3>
          </div>
          <div className="direct-category-page">
            
            {location.pathname === '/' ? 
            <i className="fa-solid fa-greater-than"></i> :
            <Link target='_blank' to={food.strYoutube}> 
              <i className="fa-brands fa-youtube" ></i>
            </Link>}
          </div>
    </div>
  )
}

export default FoodComponent

// 
//