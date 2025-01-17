
export async function handleFoodApi(){
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)

    const data = await response.json();   
    return(data.categories)
  }catch(err){
    console.log(err)
    throw err
  }
  
}

// handleFoodApi()

async function handleSearch(foodName){
  try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)

    const data = await response.json();
  
  }catch(err){
    console.log(err)
  }
  
}



