import React from 'react';
import './Recipe.css';

const Recipe = ({ title, calories, image, ingredients, serves, directions }) => {


    return (
        <div className='card'>
            <div className="bg">
                <h1>{title}</h1>
            </div>
            <img src={image} alt="{title}" />
            <h6> {`Total Calories ${Math.floor(calories)}`} </h6>
            <ul>
                {ingredients.map(ingredient => (
                    <li key={ingredient.calories}>{ingredient.text} </li>
                ))}
            </ul>

            <a href={directions}
                target='_blank' rel="noopener noreferrer">
                Directions
            </a>
            <p className='serve'> {`Serves ${serves}`} </p>


        </div>
    )
}



export default Recipe;
