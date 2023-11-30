import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import { useSwiper } from "swiper/react";

import animation from '../../assets/lotti/finance.json'
const Home = () => {
    const swiper = useSwiper()
    return (
        <div className=' w-full h-screen flex flex-col align-middle'>
            <h1 className=' text-forth text-xl font-bold text-center '>Predict</h1>

            <div className='mt-5 p-3 flex gap-6 justify-center'>
                <div>
                    <Player
                    
                    autoplay
                    loop
                    src={animation}
                    style={{ height: '300px', width: '300px' ,borderRadius:20,}}
                >
                    
                    </Player>
                </div>

            <div className='p-3 flex flex-col gap-8 '>
                <h2 className='text-forth text-2xl font-bold flex align-middle'>
                    Simuler votre independance financiere comme un pro
                </h2>
                <p className='text-forth opacity-60 '>
                    Simulez votre indépendance financière en établissant un budget, diversifiant vos placements, restant discipliné, et maintenant une éducation financière continue. Adoptez une approche proactive pour assurer le succès.
                </p>
              </div>
            </div>

            <div className='flex justify-center mt-9'>
                <button
                    onClick={()=>swiper.slideNext()}
                    className='text-forth text-2xl font-bold bg-gold-500 from-white	
                     w-50 h-30 px-4 py-2 rounded-xl hover:bg-gold-400 transition duration-150 ease-in-out'>Demmarer</button>
            </div>
        </div>
    )
}

export default Home