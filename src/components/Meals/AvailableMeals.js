import Card from '../UI/Card';
import AddMeals from'./AddMeals';

import classes from './AvailableMeals.module.css';
const Dummy_Meals = [
    { 
        id:1,
        name: 'Sushi',
        description:'Finesh fish with veggies.',
        price:25.54
    },
    { 
        id:2,
        name: 'Barbecue Burger',
        description:'Burger bread with puffs.',
        price:54.54
    },
    { 
        id:3,
        name: 'Tofu Masala',
        description:'A true treat for vegans around the world.',
        price:65.54
    },
    { 
        id:4,
        name: 'Chicken Paparazzi',
        description:'Spicy Chicken grilled with special sauce.',
        price:32.54
    },
]

const AvailableMeals = (props) =>{
const menuItems = Dummy_Meals.map(meal => 
            <li className={classes.items}>  
             <div className={classes.itembox}>
                    <h3 >{meal.name}</h3>
                    <span className={classes.description}>{meal.description}</span>
                    <span className={classes.price}>${meal.price}</span>                    
                </div>  
                <div>
                <AddMeals/>  
                </div>             
            </li>
);
    return(
        <section className={classes.availablemeals}>
        <Card>
            <ul>
                    {menuItems}
            </ul>
        </Card>
        </section>        
    )

}

export default AvailableMeals;