import React, { useEffect } from 'react'
import CTABtn from './CTABtn'
import AOS from 'aos';

const Left = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            offset: 100,    // Offset (in pixels) from the top of the element
            easing: 'ease-in-out', // Easing type
        });
    }, [])
    return (
        <div data-aos="fade-up" className=' flex flex-col gap-y-10'>
            <h1 className=' text-5xl lg:text-7xl' >Investissez sans
                y penser
            </h1>
            <p className=' text-md text-grayLight'>
                RoboAdvisorX, seule plateforme au Maroc qui crée des placements sur-mesure
                pour chacun de vos projets de vie.
            </p>
            <p className=' text-md text-grayLight'>
                Définissez vos objectifs, RoboAdvisorX s'occupe du reste. Votre épargne est
                <span className=' text-black'> investie en OPCVM</span>, nous la pilotons en continu pour vous aider à réaliser vos
                projets.

            </p>
            <p className=' text-md text-grayLight'>
                Faites votre simulation en quelques clics et laissez-vous guider.
            </p>



            <CTABtn />
        </div>
    )
}

export default Left