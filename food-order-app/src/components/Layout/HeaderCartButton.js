import React, {useContext} from "react";
import classes from './HeaderCardButton.module.css'
import CardIcon from '../Cart/CartIcon'
function HeaderCartButton(props){

    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CardIcon />
            </span>
            <span>Tour Cart</span>
            <span className={classes.badge}>
                3
            </span>
        </button>
    )

}

export default HeaderCartButton;