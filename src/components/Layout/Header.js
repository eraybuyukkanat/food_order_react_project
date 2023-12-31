import { Fragment } from "react";
import mealImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
const Header = props =>{
    return <Fragment>
        <header className={classes.header}>
            <h1>TITLE</h1>
            <HeaderCartButton onClickShowHandler={props.onClickShowHandler} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealImage} alt="A table full of food"/>
        </div>
    </Fragment>
}

export default Header;