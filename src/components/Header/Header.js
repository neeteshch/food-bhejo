import {Fragment} from 'react';
import CartButton from '../Cart/CartButton';

import classes from './Header.module.css';

import mealsimage from '../../assets/food-header.jpg';

const Header = props =>{

    return <Fragment>
        <header className={classes.header}>
            <h1>Food Bhejo</h1>
            <CartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsimage}/>
        </div>
    </Fragment>

    
}

export default Header;
