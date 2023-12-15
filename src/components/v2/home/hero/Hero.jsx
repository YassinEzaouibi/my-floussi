import React from 'react'
import Left from './Left/Left'
import Right from './right/Right'

const Hero = () => {
    return (
        <div className=' w-[90%] my-12 mx-auto h-fit flex'>
            <Left />
            <Right />
        </div>
    )
}

export default Hero