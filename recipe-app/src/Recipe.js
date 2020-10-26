import React from 'react';
import './Recipe.css';

const Recipe = ({ title, calories, image, ingredients, serves, directions }) => {
    console.log(title)

    return (
        <div className='card'>
            <h1>{title}</h1>
            <img src={image} alt="{title}" />
            <p> {`Total Calories ${Math.floor(calories)}`} </p>
            <ul>
                {ingredients.map(ingredient => (
                    <li key={ingredient.calories}>{ingredient.text} </li>
                ))}
            </ul>

            <a href={directions}
                target='_blank' rel="noopener noreferrer">
                Directions
            </a>
            <p> {`Serves ${serves}`} </p>


        </div>
    )
}



export default Recipe;
