import { useContext } from "react"
import { FoodContext } from "../contexts/FoodContext"
import FoodComponent from "../components/FoodComponent";
import '../css/Category.css'


const Category = () => {

  const {categorys, loading, error} = useContext(FoodContext);
  // console.log(categorys)

  return (
    <div className="Main-conatiner">

      {loading ? <h3 className="loading">Loading... 😁</h3> : ''}
      {error ? <h3 className="error">{error}😔</h3> : ''}

      {categorys ? 
        (categorys.length !== 0 ? (
          <div className="food-container">
          {categorys.map((category) => (
            <FoodComponent key={category.idMeal} food={category} />
          ))}
          </div>) : 
          (<h1 className="data-unavailable">
              This category food is currently unavailable...😪
            </h1>)) : 
          (<h1 className="data-unavailable">
              This category food is currently unavailable...😪
          </h1>)}

      
    </div>
  )
}

export default Category