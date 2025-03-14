import React from "react";



const BurgerStack = (props) => {
  // console.log(props)
    return (
      <>
      <h2>Your Burger Stack</h2>
      <div className="stack">
        {props.stack.map((ingredient, index) => (

          <ul key={index}>

            <li  style={{ backgroundColor: ingredient.color }}>
              {ingredient.name}
              <button onClick={() => props.removeFromBurger(ingredient)}>X</button>

              </li>

        </ul>
          
        ))}
      </div>
      </>
   );
  };
  
  export default BurgerStack;