import React from 'react'
import { Link } from 'react-router-dom'

const MenuMdLg = () => {
    return (
        <ul className=' hidden   text-black text-center font-semibold text-sm lg:flex gap-x-12 '>

            <li className=' opacity-80 h-full  ease-in-out transition-all duration-300 hover:opacity-100 '><Link to={'#'}>Pourquoi RoboAdvisorX ?</Link></li>
            <li className=' opacity-80 h-full  ease-in-out transition-all duration-300 hover:opacity-100 '><Link to={'#'}>Tarifs</Link></li>
            <li className=' opacity-80 h-full  ease-in-out transition-all duration-300 hover:opacity-100 '><Link to={'#'}>Éducation financière</Link></li>
            <li className=' opacity-80 h-full  ease-in-out transition-all duration-300 hover:opacity-100 '><Link to={'/calculateur_de_budget'}>Calculateur de budget</Link></li>
            <li className=' opacity-80 h-full  ease-in-out transition-all duration-300 hover:opacity-100 '><Link to={'/simulateur_de_patrimoine'}>Simulateur de patrimoine</Link></li>
        </ul>
    )
}

export default MenuMdLg