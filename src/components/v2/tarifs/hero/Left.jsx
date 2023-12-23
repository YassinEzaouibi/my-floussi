import React from 'react'
import { Link } from 'react-router-dom'

const Left = () => {
    return (
        <div data-aos="fade-right" className=' flex flex-col gap-y-10 p-10  gap-x-5'>
            <h1 className=' text-6xl'>
                Aucun doute entre nous
            </h1>
            <p className=' max-w-[80%] text-grayLight'>
                Etre direct a du bon. Surtout pour votre portefeuille.
                Yomoni vous coûtera environ deux fois moins qu,un gérant privé.

                Les supports d'investissement présentent un risque de perte en capital.
            </p>

            <div className=' flex-col lg:flex-row flex gap-10'>
                <Link to={'/simulateur_de_projet'}
                    className='  bg-mainLight text-white text-center text-lg px-5 py-5 transition-all duration-300 capitalize rounded-md hover:bg-darkBlue'
                >
                    Simuler votre projet
                </Link>
                <Link to={'/tarifs'} className=' text-mainLight bg-transparent border-2 border-mainLight text-center text-lg px-5 py-5 transition-all duration-300 capitalize rounded-md hover:bg-darkBlue hover:text-white hover:border-darkBlue'>
                    Prendre un rendez-vous
                </Link>
            </div>

        </div>
    )
}

export default Left