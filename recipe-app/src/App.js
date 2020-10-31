import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = '3a5f4ed1';
  const APP_KEY = 'fd17e1884cb7290bb0514c046e39c6ce'


  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setquery] = useState('pie')

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    // set hits to 9 in order to have 3 results on each row
    data.hits.length = 9;
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setquery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <section className='intro'>
        <h1>  Dev Diet </h1>
        <h6> Food when you are in a developing mood </h6>
      </section>

      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />

        <button className="search-button" type="submit">
          Search
        </button>

      </form>

      <div className='recipes'>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.calories}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            serves={recipe.recipe.yield}
            directions={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
