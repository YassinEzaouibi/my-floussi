import React, { useEffect } from 'react'
import AOS from 'aos';
import {Link} from "react-router-dom";

const HeroSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            offset: 100,    // Offset (in pixels) from the top of the element
            easing: 'ease-in-out', // Easing type
        });
    }, [])
    return (
        <div className="bg-gray-700 sm:pt-12 lg:overflow-hidden lg:pt-4 sm:pb-2 pb-20">
            <div className="lg:px-10">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div
                        className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                        <div className="lg:py-24">
                            <h1 className="pt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                <span className="block">Investissez sereinement</span>
                                <span
                                    className="block bg-gradient-to-r from-cyan-600 to-cyan-300 bg-clip-text pb-3 text-transparent sm:pb-5"> pour vos projets de vie</span>
                            </h1>
                            <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">Hikam Invest
                                est la plateforme d'investissement idéale pour vous aider à atteindre vos
                                objectifs financiers, qu'il s'agisse de préparer votre retraite, financer vos
                                études ou acheter un bien immobilier.</p>
                            <div className="mt-2 sm:mt-3">
                                <div className="sm:flex">
                                    <div className="mt-3 sm:mt-0 ">
                                        <Link to={'/questionnaire'}
                                                className="block w-full rounded-md bg-gradient-to-r from-cyan-600 to-cyan-500 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700">
                                            Commencer le questionnaire
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                            {/* hidden lg:mt-0 lg:col-span-5 lg:flex */}
                            {/* className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto sm:hidden md:block" */}
                            <img
                                className="hidden w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto md:block"
                                src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection