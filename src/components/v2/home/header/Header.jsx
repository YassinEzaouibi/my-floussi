import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/imgs/logo.svg'
import BurgerMenuBtn from './BurgerMenuBtn'
import LoginBtn from './LoginBtn'
import MenuMdLg from './MenuMdLg'
import MenuSm from './MenuSm'

const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const showSmMenu = () => {
        setToggleMenu(!toggleMenu)
    }
    return (
        <>
            <div className=' flex items-center justify-between gap-x-5 px-3 py-5 sticky top-0 z-50 shadow-md bg-secondaryLight'>
                <Link to='/'><img src={logo} alt="ida tech logo" /></Link>
                <BurgerMenuBtn onClick={showSmMenu} />
                <MenuMdLg />
                <LoginBtn />
            </div>
            <div
                className=' lg:hidden'
                style={{
                    display: toggleMenu ? 'block' : 'none',
                    opacity: toggleMenu ? 1 : 0,
                    transition: 'ease',
                    transitionDuration: 0.5
                }}
            >
                <MenuSm />
            </div>
        </>
    )
}

export default Header