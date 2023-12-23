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
import 'aos/dist/aos.css';



const Hero = () => {
    return (
        <div>
            <div className=' w-[90%] my-12 mx-auto h-fit sm:block md:flex'>
                <Left />
                <Right />
            </div>

            <Calculator />


            <RondementChart />
            <Posters posters={topPosters} />

            <Video />

            <Posters posters={mainPosters} />
            <BottomSection />
        </div>
    )
}

export default Hero