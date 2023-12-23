import React, { useEffect } from 'react'
import hero from '../../../../assets/imgs/finance.jpg'
import { Link } from 'react-router-dom'
import AOS from 'aos'

const BottomSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 500
        })
    }, [])
    return (
        <div data-aos="fade-right" className=' w-[80%] p-10 mx-auto bg-bodyLight rounded-md shadow-md my-10 flex-col lg:flex-row flex  gap-5'>
            <div className='w-full lg:w-[40%] my-auto mx-2'>
                <img src={hero} alt="" />
            </div>

            <div className=' flex flex-col justify-center'>
                <p className=' max-w-[80%] text-grayLight my-5'>
                    Votre recommandation sur mesure en moins de 2 minutes : simple, rapide, efficace
                </p>

                <div className=' flex-col lg:flex-row flex gap-10 h-fit'>
                    <Link to="/simulateur_de_projet" className=' bg-mainLight text-white text-center text-md lg:text-lg px-5 py-5 transition-all duration-300 capitalize rounded-md hover:bg-darkBlue'>
                        Simuler votre projet
                    </Link>
                    <button className='  text-mainLight bg-transparent border-2 border-mainLight text-center text-md lg:text-lg px-5 py-5 transition-all duration-300 capitalize rounded-md hover:bg-darkBlue hover:text-white hover:border-darkBlue'>
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