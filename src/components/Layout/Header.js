import React from 'react'

import calsses from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
const Header = (props) => {
    return (
        <React.Fragment>
            <header className={calsses.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className={calsses['main-image']}>
                <img src={mealsImage} alt='a table of full of delicious food'/>
            </div>
        </React.Fragment>
    )
}

export default Header
