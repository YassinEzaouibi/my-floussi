import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setAconomieParAns, setFraisMoyens, setFraisMoyensPourcentage, setFraisRobotAdvisorPourcentage, setFraisRobotAdvisorX } from '../../../../../redux/tarifsSlice'
import { economieAnnuelleCalc, economieParAnnesCalc, fraisMoyensCalc, fraisMoyensPourcentageCalc, fraisRobotAdvisorCalc, fraisRobotAdvisorPourcentageCalc } from '../../../../../utils/tarifs/tarifsCalcs'
import EconomiesFraisAnnes from './EconomiesFraisAnnes'
import FraisRoboAdviser from './FraisRoboAdviser'
import FrMoyensGerantsPrvs from './FrMoyensGerantsPrvs'

const Frais = () => {
    const dispatch = useDispatch()
    const { fraisMoyens, fraisRoboAdvisorX, economieAnnuelle, economieParAns, typeTarifs, sommePlacee } = useSelector(state => state.tarifs)

    useEffect(() => {
        const fraisMoyensPourcentage = fraisMoyensPourcentageCalc(typeTarifs)
        dispatch(setFraisMoyensPourcentage(fraisMoyensPourcentage))

        const fraisMoyens = fraisMoyensCalc(fraisMoyensPourcentage, sommePlacee)
        dispatch(setFraisMoyens(fraisMoyens))


        const fraisRobotAdvisorPourcentage = fraisRobotAdvisorPourcentageCalc(typeTarifs)
        dispatch(setFraisRobotAdvisorPourcentage(fraisRobotAdvisorPourcentage))

        const fraisRoboAdvisor = fraisRobotAdvisorCalc(fraisRobotAdvisorPourcentage, sommePlacee)
        dispatch(setFraisRobotAdvisorX(fraisRoboAdvisor))

        const economieAnnuelle = economieAnnuelleCalc(fraisMoyens, fraisRoboAdvisor)
        const economieParaAns = economieParAnnesCalc(economieAnnuelle, 20)
        dispatch(setAconomieParAns(economieParaAns))
    }, [fraisMoyens, fraisRoboAdvisorX, economieAnnuelle, economieParAns, typeTarifs, sommePlacee])

    return (
        <div className='frais w-[80%] mx-auto my-5 flex-col lg:flex-row flex gap-5 justify-center'>
            <FrMoyensGerantsPrvs />
            <FraisRoboAdviser />
            <EconomiesFraisAnnes />
        </div>
    )
}

export default Frais