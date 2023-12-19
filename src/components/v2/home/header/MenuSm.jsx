import React from 'react'
import { Link } from 'react-router-dom'

const MenuSm = ({ setToggleMenu }) => {
    return (
        <ul
            className=' flex lg:hidden flex-col gap-y-4 transition-all duration-300 ease-in-out   text-black  font-semibold text-sm px-2  '>

            <li
                onClick={() => setToggleMenu(false)}
                className=' opacity-80 h-full w-fit  ease-in-out transition-all duration-300 hover:opacity-100 '><Link to={'#'}>Pourquoi RoboAdvisorX ?</Link>
            </li>
            <li
                onClick={() => setToggleMenu(false)}
                className=' opacity-80 h-full w-fit  ease-in-out transition-all duration-300 hover:opacity-100 '><Link to={'/tarifs'}>Tarifs</Link>
            </li>
            <li
                onClick={() => setToggleMenu(false)}
                className=' opacity-80 h-full w-fit  ease-in-out transition-all duration-300 hover:opacity-100 '><Link to={'#'}>Éducation financière</Link>
            </li>
            <li
                onClick={() => setToggleMenu(false)}
                className=' opacity-80 h-full w-fit  ease-in-out transition-all duration-300 hover:opacity-100 '><Link to={'/calculateur_de_budget'}>Calculateur de budget</Link>
            </li>
            <li
                onClick={() => setToggleMenu(false)}
                className=' opacity-80 h-full w-fit  ease-in-out transition-all duration-300 hover:opacity-100 '><Link to={'/simulateur_de_patrimoine'}>Simulateur de patrimoine</Link>
            </li>
        </ul>
    )
}

export default MenuSm