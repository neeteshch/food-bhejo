import logo from './logo.svg';
import classes from './App.css';
import {Fragment} from 'react';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';


function App() {
  return (
    <Fragment>
      <Header/>
      <Meals/>
    </Fragment>
    
  );
}

export default App;
