import React from 'react'

const EndSection = () => {
    return (
        <div className=' w-[100%] mt-10'>
            <p className=' text-center text-grayLight text-lg my-16 mx-auto '>
                Fatigué de calculer et de suivre vous-même
                votre patrimoine ?
            </p>
            <p className=' text-center text-grayLight text-lg my-16 mx-auto '>
                Simplifiez votre gestion de patrimoine avec
                RoboAdvisorX!
            </p>

            <div className=' flex justify-center h-fit w-[100%] my-16 px-2'>
                <button
                    className=' bg-mainLight
                     text-white rounded-3xl w-[210px]
                      h-[50px] shadow-md px-2 py-4 text-center align-middle text-lg flex items-center justify-center hover:shadow-lg transition-all 
                      duration-300  capitalize'
                > Créer un compte</button>
            </div>

        </div>
    )
}

export default EndSection