import { useContext } from "react"
import { FoodContext } from "../contexts/FoodContext"
import '../css/Ingredients.css'

const Ingredients = () => {

  const {ingredientFood, handleAddToFav, handleRemoveFromFav, isFavorite} = useContext(FoodContext);


  const ingredients = [];
  for(let i =0 ; i<20; i++){
    const key1 = `strIngredient${1+i}`
    const key2 = `strMeasure${1+i}`
    ingredients.push({name: ingredientFood[key1] , measure:ingredientFood[key2] })
  }
console.log(ingredientFood)
  const favorite = isFavorite(ingredientFood.idMeal);

  function handeFav(){
    if(favorite){
      handleRemoveFromFav(ingredientFood.idMeal)
    }else{
      handleAddToFav(ingredientFood)
    }
  }

  return (
    <div className="main-container widget-container">
      <div className="ingredient-upper-container">
        <div className="food-image">
          <img src={ingredientFood.strMealThumb} alt="image" />
          <i className={`fa-solid fa-heart ${favorite ? 'active' : ''}`} onClick={handeFav}></i>
          <div className="food-name">
            <h1>{ingredientFood.strMeal}</h1>
          </div>
        </div>
        
        <div className="ingerdient-container">
          {ingredients.map((ingredient,index)=> ingredient.name!=='' ?
          <div key={index} className="ingredient">
            <img src={`https://www.themealdb.com/images/ingredients/${ingredient.name}-small.png`} alt="ingredient" />
            <h3>{ingredient.name}</h3>
            <h4 className="measurement">{ingredient.measure}</h4>
          </div> : ''
          )}
        </div>
      </div>

      <div className="instruction-step">
        <p className="text">{ingredientFood.strInstructions}</p>
      </div>
    </div>
  )
}

export default Ingredients