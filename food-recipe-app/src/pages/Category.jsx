import { useContext } from "react"
import { FoodContext } from "../contexts/FoodContext"
import FoodComponent from "../components/FoodComponent";
import '../css/Category.css'


const Category = () => {

  const {categorys, loading, error} = useContext(FoodContext);

  return (
    <div className="Main-conatiner">

      {loading ? <h3 className="loading">Loading... 😁</h3> : ''}
      {error ? 
      <div className="error">
        <div className="error-dog-img">
          <img src="../src/assets/internet-error-dog.png" alt="error Image" />
        </div>
        <div className="error-text">
          <h1>Oops!</h1>
          <h1>No internet</h1>
          <p>Please check your internet connection</p>
        </div>
      </div> : ''}

      
        {categorys && !loading && !error ? (
          <div className="food-container">
          {categorys.map((category) => (
            <FoodComponent key={category.idMeal} food={category} />
          ))}
          </div>) : (!loading && !error ? 
            (<div className="data-unavailable">
              <div className="no-match-dog-img">
                <img src="../src/assets/no-match-dog.png" alt="dog image" />
              </div>
              <div className="no-match-text">
                <h1>Oops!</h1>
                <h3>The food is currently unavailable...😪</h3>
              </div>
              
            </div>): '')
           }

      
    </div>
  )
}

export default Category