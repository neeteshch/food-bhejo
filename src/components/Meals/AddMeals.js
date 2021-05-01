import { Fragment } from 'react';
import Input from '../UI/Input';

import classes from './AddMeals.module.css';

const AddMeals =(props) =>{
return(
    <form className={classes.form}>
    <Input label="Amount" input={
        {   id:1,
            type: 'text'
        }
    }></Input>

    <button className={classes.button}>+ Add</button>
    </form>
)
}

export default AddMeals;