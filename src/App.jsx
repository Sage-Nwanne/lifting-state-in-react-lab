// src/App.jsx

import './App.css';
import IngredientList from './components/IngredientList/IngredientList';
import BurgerStack from './components/BurgerStack/BurgerStack';
import { useState } from 'react';
const App = () => {
/* user story wants to see stack of ingredients on screen, meaning a list, meaning an array as intial state */
  const [stack, setStack] = useState([])



  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];


const addToBurger = (ingredient) => {
  // function to add ingredient to burger stack

  setStack([...stack, ingredient])
 

}


const removeFromBurger = (pickedIngredient) => {
  // function to remove ingredient from burger stack
  const updatedStack = stack.filter((eachIngredient) => pickedIngredient !== eachIngredient)
  setStack(updatedStack)



}




  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList availableIngredients={availableIngredients} addToBurger={addToBurger} />  
        <BurgerStack  stack={stack} removeFromBurger={removeFromBurger}/>
      </section>
    </main>
  );
};

export default App;
