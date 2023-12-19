import React from 'react'

import rocket from '../../../../assets/imgs/herro-btm/rocket.svg'
import messaging from '../../../../assets/imgs/herro-btm/messaging.svg'
import cipf from '../../../../assets/imgs/herro-btm/cipf.svg'

const BottomSection = () => {
    return (
        <div className=' bg-darkBlue p-20 flex flex-col gap-10 items-center '>
            <h1 className=' text-white text-4xl text-left lg:text-center'>
                La tranquillité d'esprit, à tout moment
            </h1>
            <div className='block lg:flex items-center justify-between gap-9  '>
                <div className='  flex flex-col gap-5 lg:p-10 my-5'>
                    <img src={rocket} alt="" />
                </div>
                <div className='   lg:p-10 my-5'>
                    <img src={messaging} alt="" />
                </div>
                <div className='   lg:p-10 my-5'>
                    <img src={cipf} alt="" />
                </div>
            </div>

        </div>
    )
}

export default BottomSection