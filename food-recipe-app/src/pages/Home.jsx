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
      {error ? <h3 className="error">{error}😔</h3> : ''}

      {foods ? 
      <div className="food-container">
        {foods.map((food)=><FoodComponent key = {food.idCategory} food={food}/>)}
      </div> : ''}
    </div>
  )
}

export default Home