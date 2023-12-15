import React from 'react'

const BurgerMenuBtn = ({ onClick }) => {
    return (
        <div
            id="menuToggle" className=' lg:hidden'>
            <input id="checkbox" type="checkbox" />
            <label
                onClick={onClick}
                className="toggle" htmlFor="checkbox">
                <div className="bar bar--top"></div>
                <div className="bar bar--middle"></div>
                <div className="bar bar--bottom"></div>
            </label>
        </div>
    )
}

export default BurgerMenuBtn