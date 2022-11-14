import React, {useContext} from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
function MealItem(props){
    const price = `$${props.price.toFixed(2)}`;
    const cartCtx = useContext(CartContext);
    
    function addToCartHandler(amount){
        console.log(props)
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }
    return (
        <li className={classes.meal}>
           <div> 
            <div><h3>{props.name}</h3></div>
            <div className={classes.description}>{props.description}</div> 
            <div className={classes.price}><h4>{price}</h4></div>
            </div>
            <div>
            <MealItemForm id={props.meal.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItem;