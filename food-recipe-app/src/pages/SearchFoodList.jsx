import { useContext } from 'react'
import '../css/SearchFoodList.css'
import { FoodContext } from '../contexts/FoodContext'
import FoodComponent from '../components/FoodComponent'

const SearchFoodList = () => {

  const {searchList, loading, error} = useContext(FoodContext);

  return (
    
      <div className="Main-conatiner">
  
        {loading ? <h3 className="loading">Loading... 😁</h3> : ''}
        {error ? <h3 className="error">{error}😔</h3> : ''}
        
        {searchList && !loading? 
          <div className="food-container">
          {searchList.map((food) => (
            <FoodComponent key={food.idMeal} food={food} />
          ))}
        </div> : (!loading ? <h1 className='no-match'> No matching food available...😒</h1> : '')}
           
  
        
      </div>
    )
  
}

export default SearchFoodList