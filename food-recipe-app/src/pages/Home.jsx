import { useContext } from "react"
import { FoodContext } from "../contexts/FoodContext"
import FoodComponent from "../components/FoodComponent";
import '../css/Home.css'

const Home = () => {

  const {foods,loading,error} = useContext(FoodContext);
  // console.log(foods)

  return (
    <div className="Main-conatiner">

      {loading ? <h3 className="loading">Loading... 😁</h3> : ''}
      {error ? <div className="error">
        <div className="error-dog-img">
          <img src="../src/assets/internet-dog-error.png" alt="error Image" />
        </div>
        <div className="error-text">
          <h1>Oops!</h1>
          <h1>No internet</h1>
          <p>Please check your internet connection</p>
        </div>
      </div> : ''}

      {foods && !loading && !error? 
      <div className="food-container">
        {foods.map((food)=><FoodComponent key = {food.idCategory} food={food}/>)}
      </div> : ''}
    </div>
  )
}

export default Home