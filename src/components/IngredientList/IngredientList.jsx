import React from "react";
import Ingredients from '../ingredients/ingredients'

const IngredientList = (props) => {
  //IngredientList: A <ul> that renders the elements held in availableIngredients. Each ingredient rendered in this component should contain a button for adding the ingredient to the stack.
  //Each ingredient should also have a unique key prop.
  //The button should call the addToBurger function passed down from App.js

    return (
        <div className="ingredient-list">
          <h2>Available Ingredients</h2>
          {props.availableIngredients.map((ingredient, index) => (
            <Ingredients
              key={index}
              name={ingredient.name}
              color={ingredient.color}
              addToBurger={props.addToBurger}
              isInStack={false}  
              ingredient={ingredient}// False because we're adding ingredients
            />
          ))}
        </div>

     
      );
    } 
    
  export default IngredientList;