import React from 'react'
import { useSelector } from 'react-redux'

const EconomiesFraisAnnes = () => {
    const { economieParAns } = useSelector(state => state.tarifs)

    return (
        <div>
            <p className=' text-grayLight font-light text-lg mb-4'>Économies sur les frais au bout de 10 ans</p>
            <h4 className=' text-mainLight  text-xl'>{economieParAns} MAD / mois</h4>
        </div>
    )
}

export default EconomiesFraisAnnes