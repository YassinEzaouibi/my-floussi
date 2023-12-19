import React from 'react'
import { mainPosters } from '../../../utils/hero/mainPostsers.js'
import { topPosters } from '../../../utils/hero/topPosters.js'
import BottomSection from './bottom-section/BottomSection.jsx'
import Calculator from './calculator/Calculator'
import RondementChart from './chart/RondementChart.jsx'
import Left from './Left/Left'
import Posters from './poster/Potsers'
import Right from './right/Right'
import Video from './video/Video.jsx'


const Hero = () => {
    return (
        <div>
            <div className=' w-[90%] my-12 mx-auto h-fit sm:block md:flex'>
                <Left />
                <Right />
            </div>
            <div>
                <Calculator />
            </div>
            <div className='w-[99%] lg:w-[90%] mx-auto bg-bodyLight p-3 lg:p-10 shadow-md my-10'>
                <h1 className=' text-mdBlue text-3xl text-center my-5 '> Rendement annuel Moyen de 12% </h1>

                <RondementChart />
            </div>
            <Posters posters={topPosters} />

            <Video />

            <Posters posters={mainPosters} />
            <BottomSection />
        </div>
    )
}

export default Hero