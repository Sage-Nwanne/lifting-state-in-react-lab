const Ingredients = (props) => {
  // console.log(props)
    return (
        <>    
          <ul>
            <li style={{ backgroundColor: props.color }}> {props.name}
            <button onClick={() => {props.addToBurger(props.ingredient)}}> + </button>
            </li>
            
          </ul>
           
       
          
          
        </>
        
       
      );
}

export default Ingredients;