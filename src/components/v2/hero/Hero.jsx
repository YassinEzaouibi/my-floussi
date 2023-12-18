import React from 'react'
import Calculator from './calculator/Calculator'
import Left from './Left/Left'
import Right from './right/Right'

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
        </div>
    )
}

export default Hero