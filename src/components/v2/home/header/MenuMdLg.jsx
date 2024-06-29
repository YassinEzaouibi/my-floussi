import React from 'react'
import { Link } from 'react-router-dom'

const MenuMdLg = () => {
    return (
        <div className="hidden justify-between order-2 w-full lg:flex lg:w-auto"
             id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                    <Link
                       className="text-base font-medium text-white hover:text-gray-300"
                    to={"/#"}
                    >
                        Hikma invest
                    </Link>
                </li>
                <li>
                    <Link
                        className="text-base font-medium text-white hover:text-gray-300"
                        to={'/tarifs'}>
                        Tarifs
                    </Link>

                </li>
                <li>
                    <Link to={'/questionnaire'}
                       className="text-base font-medium text-white hover:text-gray-300">Questionnaire
                    </Link>
                </li>
                <li>
                    <Link to={'/calculateur_de_budget'}
                       className="text-base font-medium text-white hover:text-gray-300">budget
                    </Link>
                </li>
                <li>
                    <Link to={'/simulateur_de_patrimoine'}
                       className="text-base font-medium text-white hover:text-gray-300">Simulateur</Link>
                </li>
            </ul>
        </div>
    )
}

export default MenuMdLg