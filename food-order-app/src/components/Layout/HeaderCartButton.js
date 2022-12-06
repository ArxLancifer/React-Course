import React, {useContext, useEffect, useState} from "react";
import classes from './HeaderCardButton.module.css'
import CardIcon from '../Cart/CartIcon'
import CartContext from "../../store/cart-context";
function HeaderCartButton(props){
    const [btnIsHighLighted, setBtnIsHigghtlighted] = useState(false);
    const cartCtx = useContext(CartContext)
    const {items} =cartCtx;
    
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
        console.log(item)
        return curNumber + item.amount
    },0);

    
    const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ''}`;

    useEffect(()=>{
        if(items.length === 0){
            return;
        }
        setBtnIsHigghtlighted(true);

     const timer = setTimeout(()=>
        setBtnIsHigghtlighted(false)
        , 300);
        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return(
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CardIcon />
            </span>
            <span>Tour Cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )

}

export default HeaderCartButton;