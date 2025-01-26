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
        </div> : (!loading && !error ? 
            (<div className="data-unavailable">
              <div className="no-match-dog-img">
                <img src="../src/assets/no-match-dog.png" alt="dog image" />
              </div>
              <div className="no-match-text">
                <h1>Oops!</h1>
                <h3>The food is currently unavailable...😪</h3>
              </div>
              
            </div>) : '')}
           
  
        
      </div>
    )
  
}

export default SearchFoodList