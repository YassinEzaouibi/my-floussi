import React, { useState } from 'react'
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
            <div className=' flex items-center justify-between gap-x-5 px-3 py-5'>
                <img src={logo} alt="ida tech logo" />
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