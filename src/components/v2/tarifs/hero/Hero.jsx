import React from 'react'
import Left from './Left'
import Right from './Right'

const Hero = () => {
    return (
        <div className=' mx-auto h-fit bg-secondaryLight'>
            <div className=' flex'>
                <Left />
                <Right />

            </div>

        </div>
    )
}

export default Hero