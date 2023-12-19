import React from 'react'
import Frais from './frais/Frais'
import TarifsSlider from './Slider'
import TypeTarifsSelect from './TarisSelect'

const Main = () => {
    return (
        <div className='main-tarif my-10 flex flex-col p-10 gap-y-10'>
            <h2 className=' text-center text-darkBlue text-4xl'> Économisez pour prospérer</h2>

            <p className=' text-grayLight text-center text-xl mb-10 '>Regagnez des milliers d'euros : Robot Advisor X, la solution où votre épargne prospère sans tomber dans la poche du géran</p>
            <div className=' w-full mb-20 lg:w-[40%] mx-auto'><TypeTarifsSelect /></div>



            <TarifsSlider />

            <Frais />

        </div>
    )
}

export default Main