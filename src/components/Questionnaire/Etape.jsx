import React, { memo } from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import { useSwiper } from "swiper/react";

import animation from '../../assets/lotti/finance.json'
const Etape = ({ title, children, buttonTitle, buttonDisabled }) => {
    const swiper = useSwiper()
    return (
        <div className=' w-full flex flex-col align-middle bg-black '>
            <h1 className=' text-forth text-xl font-bold text-center '> {title}</h1>

            <div className='mt-5 p-3 flex gap-6 justify-center'>
                <div>
                    <Player
                        autoplay
                        loop
                        src={animation}
                        style={{ height: '300px', width: '300px', borderRadius: 20, }}
                    >

                    </Player>
                </div>

                <div className=' w-1/3 my-auto' >
                    {children}
                </div>
            </div>

            <div className='flex justify-center mt-9'>
                <button
                    disabled={buttonDisabled}
                    onClick={() => swiper.slideNext()}
                    className='text-forth text-2xl font-bold bg-gold-500 from-white	
                     w-50 h-30 px-4 py-2 rounded-xl hover:bg-gold-400 transition duration-150 ease-in-out'>{buttonTitle}</button>
            </div>
        </div>
    )
}

export default memo(Etape)