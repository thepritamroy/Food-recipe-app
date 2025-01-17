import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import Category from './pages/Category'
import FoodProvider from './contexts/FoodContext'
import NavBar from './components/NavBar'
import Favorite from './pages/Favorite'

function App() {
  

  return (
  <FoodProvider>
    <NavBar/>
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/category' element = {<Category/>}></Route>
      <Route path='/favorite' element = {<Favorite/>}></Route>  
    </Routes>
  </FoodProvider>
  )
}

export default App
