import '../css/FoodComponent.css'
import {Link} from 'react-router-dom'

const FoodComponent = (props) => {
  const food = props.food;
  return (
    <div className="food-box">
          <div className="food-img">
            <Link to='/category'><img src={food.strCategoryThumb} alt="Image" /></Link>
          </div>
          <div className="food-category">
            <h3>{food.strCategory}</h3>
          </div>
          <div className="fav-button">
            <Link to='/favorite'><i className='fa-solid fa-heart'></i></Link>
          </div>
          <div className="direct-category-page">
          <Link to='/category'><i class="fa-solid fa-greater-than"></i></Link>
          </div>
    </div>
  )
}

export default FoodComponent