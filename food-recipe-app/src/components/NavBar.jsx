import {Link, useLocation} from 'react-router-dom'
import '../css/NavBar.css'
import { useContext } from 'react';
import { FoodContext } from '../contexts/FoodContext';

const NavBar = () => {

  const location = useLocation();
  const {setSearchFood} = useContext(FoodContext);

  return (
   <header>
    <nav>
      <div className="logo">
        <h1 className='logo-title'>FoodRecipe</h1>
      </div>
      <div className="search-bar">
        <input type="text" 
        placeholder="Enter a food name..." 
        onChange={(e)=>setSearchFood(e.target.value)}/>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="menu-bar">
        <Link className={`menu  ${location.pathname === '/' ? 'menu-active' : ''}`} to='/' >Home</Link>
        <Link className={`menu  ${location.pathname === '/favorite' ? 'menu-active' : ''}`} to='/favorite'>Favorite</Link>
        <i className="fa-regular fa-moon"></i>
      </div>
    </nav>
   </header>
  )
}

export default NavBar