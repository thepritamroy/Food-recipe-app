import { useContext } from "react"
import { FoodContext } from "../contexts/FoodContext"
import FoodComponent from "../components/FoodComponent";
import '../css/Home.css'

const Home = () => {

  const {foods} = useContext(FoodContext);
  console.log(foods)

  return (
    <div className="Main-conatiner">
      <div className="food-container">
        {foods.map((food)=><FoodComponent key = {food.idCategory} food={food}/>)}
      </div>
    </div>
  )
}

export default Home