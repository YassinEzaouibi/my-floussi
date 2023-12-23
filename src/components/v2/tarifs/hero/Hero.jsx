import React, { useEffect } from 'react'
import Left from './Left'
import Right from './Right'
import AOS from 'aos'

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 500
        })
    }, [])
    return (
        <div className=' mx-auto h-fit bg-secondaryLight'>
            <div className='flex-col lg:flex-row flex'>
                <Left />
                <Right />

            </div>

        </div>
    )
}

export default Hero