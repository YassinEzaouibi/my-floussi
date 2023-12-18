import React from 'react'
import hero from '../../../../assets/imgs/finance.jpg'

const BottomSection = () => {
    return (
        <div className=' w-[80%] p-10 mx-auto bg-bodyLight rounded-md shadow-md my-10 flex  gap-5'>
            <div className=' w-[40%] my-auto mx-2'>
                <img src={hero} alt="" />
            </div>

            <div className=' flex flex-col justify-center'>
                <p className=' max-w-[80%] text-grayLight my-5'>
                    Votre recommandation sur mesure en moins de 2 minutes : simple, rapide, efficace
                </p>

                <div className='flex gap-10 h-fit'>
                    <button className=' bg-mainLight text-white text-center text-lg px-5 py-5 transition-all duration-300 capitalize rounded-md hover:bg-darkBlue'>
                        Simuler votre projet
                    </button>
                    <button className='  text-mainLight bg-transparent border-2 border-mainLight text-center text-lg px-5 py-5 transition-all duration-300 capitalize rounded-md hover:bg-darkBlue hover:text-white hover:border-darkBlue'>
                        Prendre un rendez-vous
                    </button>
                </div>
                <p className=' italic text-sm max-w-[80%] text-grayLight my-5'>
                    Attention : Risque de perte en capital avec les supports d'investissement.
                </p>
            </div>
        </div>
    )
}

export default BottomSection