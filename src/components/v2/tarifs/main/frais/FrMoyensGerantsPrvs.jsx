import React from 'react'
import { useSelector } from 'react-redux'
import { addSpacesToNumber } from '../../../../../utils/sankeyData/sankeyCalucaltors'

const FrMoyensGerantsPrvs = () => {
    const { fraisMoyens, fraisMoyensPourcentage } = useSelector(state => state.tarifs)
    return (
        <div>
            <p className=' text-grayLight font-light text-lg mb-4'>Frais moyens des gérants privés {(fraisMoyensPourcentage * 100).toFixed(2)} %</p>
            <h4 className=' text-mainLight  text-xl'>{addSpacesToNumber(fraisMoyens)} MAD / mois</h4>
        </div>
    )
}

export default FrMoyensGerantsPrvs