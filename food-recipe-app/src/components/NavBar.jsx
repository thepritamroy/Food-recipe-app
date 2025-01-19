import {Link, useLocation, useNavigate} from 'react-router-dom'
import '../css/NavBar.css'
import { useContext } from 'react';
import { FoodContext } from '../contexts/FoodContext';

const NavBar = () => {

  const location = useLocation(); // to access url
  const navigate = useNavigate(); // To change url while using onkeyDown
  const {searchFood, loadSearchFoods,setSearchQuery , searchQuery, handleSearch, handleThemeChange} = useContext(FoodContext);

// console.log(searchFood)
  return (
   <header>
    <nav>
      <div className="logo">
        <h1 className='logo-title'>FoodRecipe</h1>
      </div>
      <div className="search-bar">
        <input type="text"
        value={searchQuery} 
        placeholder="Enter a food name..." 
        onChange={(e)=>{
          setSearchQuery(e.target.value);
          loadSearchFoods(e.target.value)
        }}
        onKeyDown={(e)=>{
          if(e.key === 'Enter'){
            if(searchQuery && searchQuery.trim()) navigate('/searchFood');            
            handleSearch(searchQuery)
          }
        }}
        />
        
          <i className="fa-solid fa-magnifying-glass" ></i>
        
        <Link to={`${searchQuery && searchQuery.trim() ? '/searchfood' : ''}`} >
          <button className='Search-button' 
            onClick={()=>handleSearch(searchQuery)}>
              Search
          </button>
        </Link>
        

        <div className="dropdown-container">
          {searchFood ? 
            <div className="dropdown-widget">
              {searchFood.map((food,index)=>
              <Link key={index} to='/searchFood'>
                <div  className="dropdown" onClick={(e)=>{
                  setSearchQuery(food.strMeal);
                  handleSearch(food.strMeal)}}>
                  {food.strMeal} {food.strCategory} {food.strArea}
                </div>
              </Link>)}
            </div> : ''}
        </div>
      </div>
      <div className="menu-bar">
        <Link className={`menu  ${location.pathname === '/' ? 'menu-active' : ''}`} to='/' >Home</Link>
        <Link className={`menu  ${location.pathname === '/favorite' ? 'menu-active' : ''}`} to='/favorite'>Favorite</Link>
        <i className="fa-regular fa-moon"
        onClick={handleThemeChange}></i>
      </div>
    </nav>
   </header>
  )
}

export default NavBar