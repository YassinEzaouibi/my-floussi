import React from 'react'

const Left = () => {
    return (
        <div className=' flex flex-col gap-y-10 p-10  gap-x-5'>
            <h1 className=' text-6xl'>
                Aucun doute entre nous
            </h1>
            <p className=' max-w-[80%] text-grayLight'>
                Etre direct a du bon. Surtout pour votre portefeuille.
                Yomoni vous coûtera environ deux fois moins qu,un gérant privé.

                Les supports d'investissement présentent un risque de perte en capital.
            </p>

            <div className='flex gap-10'>
                <button className=' bg-mainLight text-white text-center text-lg px-5 py-5 transition-all duration-300 capitalize rounded-md hover:bg-darkBlue'>
                    Simuler votre projet
                </button>
                <button className=' text-mainLight bg-transparent border-2 border-mainLight text-center text-lg px-5 py-5 transition-all duration-300 capitalize rounded-md hover:bg-darkBlue hover:text-white hover:border-darkBlue'>
                    Prendre un rendez-vous
                </button>
            </div>

        </div>
    )
}

export default Left