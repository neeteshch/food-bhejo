
import {Fragment} from 'react';

import classes from "./Cart.Module.css";

import { IoMdCart } from 'react-icons/io';


const CartButton = (props) =>{

    return <Fragment>
       <div className={ classes.cart}>
        <IoMdCart className={ classes.icon}/>
        <span className={ classes.carttext}>Your Cart</span>
        <span className={ classes.badge}>3</span>
        </div>
        </Fragment>     
    
}

export default CartButton;  