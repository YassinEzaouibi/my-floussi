import React, { useState, useEffect } from 'react'
import c1 from '../../../../assets/imgs/calculateur/1.svg'
import c2 from '../../../../assets/imgs/calculateur/2.svg'
import c3 from '../../../../assets/imgs/calculateur/3.svg'
import c4 from '../../../../assets/imgs/calculateur/4.svg'
import c5 from '../../../../assets/imgs/calculateur/5.svg'
import c6 from '../../../../assets/imgs/calculateur/6.svg'
import c7 from '../../../../assets/imgs/calculateur/7.svg'
import c8 from '../../../../assets/imgs/calculateur/8.svg'
import c9 from '../../../../assets/imgs/calculateur/9.svg'
import c10 from '../../../../assets/imgs/calculateur/10.svg'
import CalculatorSlider from './CalculatorSlider'
import InvestSlider from './InvestSlider'

const svgs = [c1, c2, c3, c4, c4, c5, c6, c7, c8, c9, c10]


const Calculator = () => {
    const [imgSrc, setImageSrc] = useState(0)
    const [invest, setInvest] = useState(0)

    useEffect(() => {

        const thumb = document.querySelector(' .calc-slider .MuiSlider-thumb')
        if (thumb) {
            const input = `
            <input data-index="0" aria-label="Always visible" aria-valuenow="0" aria-orientation="horizontal" aria-valuemax="10" aria-valuemin="0" type="range" min="0" max="10" step="1" value="0" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 100%; margin: -1px; overflow: hidden; padding: 0px; position: absolute; white-space: nowrap; width: 100%; direction: ltr;">
            `
            const txt = `<span>
                 ${(imgSrc + 1) * 5} années
            </span>`
            thumb.innerHTML = input
            thumb.innerHTML += txt
        }
    }, [imgSrc])


    return (
        <div className=' overflow-hidden sm:w-[100%] md:w-[60%] mx-auto  my-12  border border-mainLight rounded-md shadow-md'>
            <div className=' sm:[100%] md:w-[80%] mx-auto p-5 relative  '>
                <h1 className=' text-center text-2xl text-grayLight'>Liberté financière ou travail à vie : Quel choix pour votre avenir?</h1>

                <div className=' w-fit mx-auto text-center border rounded-md text-grayLight p-5 my-4'>
                    <h3>Investissez {invest} MAD par semaine</h3>
                </div>
                <InvestSlider v={invest} setV={setInvest} />

                <div className=' flex flex-col gap-9 text-grayLight'>
                    <div className=' text-mainLight'>
                        <h5 className=' text-sm'>Robot advisor X</h5>
                        <h3 className=' text-2xl'>22,759 MAD</h3>
                    </div>
                    <div>
                        <h5>Fonds communs de placement</h5>
                        <h3>22,129 MAD</h3>
                    </div>
                    <div>
                        <h5>Compte d'épargne</h5>
                        <h3>18,759 MAD</h3>
                    </div>
                </div>

                <img src={svgs[imgSrc]} alt="" />






                <CalculatorSlider v={imgSrc} setV={setImageSrc} />


            </div>
        </div>
    )
}

export default Calculator