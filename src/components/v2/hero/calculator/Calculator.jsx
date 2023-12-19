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
import { FDG_ANUUEL, FRAIS_MENSUEL_ABONNEMENT, investNetFraisTotalCalc, fraisCalc, tauxNetHebdoCalc, TAUX_RENDEMENT_MOYEN, FRAIS_MENSUEL_ABONNEMENT_OPVCM, FDG_ANUUEL_OPVCM, TAUX_RENDEMENT_MOYEN_OPVCM, investNetFraisTotal_OPVCM_Calc, investNetFraisTotal_CompteCarnet_Calc, TAUX_RENDEMENT_MOYEN_COMPTE_CARNET, FDG_ANUUEL_COMPTE_CARNET } from '../../../../utils/hero/calculator/calculator'
import { addSpacesToNumber } from '../../../../utils/sankeyData/sankeyCalucaltors'

const svgs = [c1, c2, c3, c4, c4, c5, c6, c7, c8, c9, c10]


const Calculator = () => {
    const [imgSrc, setImageSrc] = useState(0)
    const [invest, setInvest] = useState(350)

    const [nosFrais, setNosFrais] = useState(0)
    const [OPCVM, setOPVCM] = useState(0)
    const [compteCarnet, setCompteCarnet] = useState(0)



    useEffect(() => {
        const ans = imgSrc * 5

        const investNetFraisTotal = investNetFraisTotalCalc(+invest, FRAIS_MENSUEL_ABONNEMENT)
        const tauxNetHebdo = tauxNetHebdoCalc(TAUX_RENDEMENT_MOYEN, FDG_ANUUEL)
        const nosFrais = fraisCalc(investNetFraisTotal, tauxNetHebdo, ans)

        const investNetFraisTotal_opvcm = investNetFraisTotal_OPVCM_Calc(invest)
        const tauxNetHebdo_opvcm = tauxNetHebdoCalc(TAUX_RENDEMENT_MOYEN_OPVCM, FDG_ANUUEL_OPVCM)
        const fraisOpvcm = fraisCalc(investNetFraisTotal_opvcm, tauxNetHebdo_opvcm, ans)

        const investNetFraisTotal_compteCarnet = investNetFraisTotal_CompteCarnet_Calc(invest)
        const tauxNetHebdo_compteCarnet = tauxNetHebdoCalc(TAUX_RENDEMENT_MOYEN_COMPTE_CARNET, FDG_ANUUEL_COMPTE_CARNET)
        const fraisCompteCaret = fraisCalc(investNetFraisTotal_compteCarnet, tauxNetHebdo_compteCarnet, ans)





        // console.log(nosFrais(300, 0.001373827, 5))
        setNosFrais(addSpacesToNumber(parseInt(nosFrais)))
        setOPVCM(addSpacesToNumber(parseInt(fraisOpvcm)))
        setCompteCarnet(addSpacesToNumber(parseInt(fraisCompteCaret)))

        // console.log(FDG_ANUUEL_OPVCM)
        // console.log()


        const thumb = document.querySelector(' .calc-slider .MuiSlider-thumb')
        if (thumb) {
            const input = `
            <input data-index="0" aria-label="Always visible" aria-valuenow="0" aria-orientation="horizontal" aria-valuemax="10" aria-valuemin="0" type="range" min="0" max="10" step="1" value="0" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 100%; margin: -1px; overflow: hidden; padding: 0px; position: absolute; white-space: nowrap; width: 100%; direction: ltr;">
            `
            const txt = `<span>
                 ${(imgSrc) * 5} années
            </span>`
            thumb.innerHTML = input
            thumb.innerHTML += txt
        }
    }, [imgSrc, invest])





    return (
        <div className='overflow-hidden sm:w-[100%] md:w-[60%] mx-auto  my-12  border border-mainLight rounded-md shadow-md'>
            <div className=' sm:[100%] md:w-[80%] mx-auto px-20 py-5 relative  '>
                <h1 className=' text-center text-2xl text-grayLight'>Liberté financière ou travail à vie : Quel choix pour votre avenir?</h1>

                <div className=' w-fit mx-auto text-center border rounded-md text-grayLight p-5 my-4'>
                    <h3>Investissez {invest} MAD par semaine</h3>
                </div>
                <InvestSlider v={invest} setV={setInvest} />

                <div className=' flex flex-col gap-9 text-grayLight'>
                    <div className=' text-mainLight'>
                        <h5 className=' text-sm'>Hikma</h5>
                        <h3 className=' text-2xl'>{nosFrais} MAD</h3>
                    </div>
                    <div>
                        <h5>OPCVM Actions</h5>
                        <h3>{OPCVM} MAD</h3>
                    </div>
                    <div>
                        <h5>Compte carnet</h5>
                        <h3>{compteCarnet} MAD</h3>
                    </div>
                </div>

                <div className=' scale-125'>
                    <img src={svgs[imgSrc]} />
                </div>
                <CalculatorSlider v={imgSrc} setV={setImageSrc} />


            </div>
            <div className=' text-left px-5'>
                <h5
                    className=' text-2xl text-mainLight my-5  '
                >Retraite inatteignable pour de nombreux Marocains : la réalité financière qui persiste</h5>
                <p className=' text-sm text-grayLight my-2 font-light'>
                    62 % des Marocains craignent de ne pas avoir suffisamment d'argent pour prendre leur retraite, et ce graphique en illustre la raison. Les Marocains ont investi plus de 2 billions de dirhams en fonds communs de placement, et la majorité d'entre eux paient des frais moyens d'environ 2 %, ce qui nuit sérieusement au rendement de leur investissement. Comparativement, le même investissement à long terme peut générer près du double d'argent avec Moka, en raison des frais associés aux fonds communs de placement
                </p>
                <p className=' text-xs italic text-grayLight my-5'>
                    Cet outil actuel est uniquement destiné à des fins illustratives et ne préjuge en rien du rendement réel des portefeuilles Moka, des fonds communs de placement ou des comptes d'épargne
                </p>
            </div>
        </div>
    )
}

export default Calculator