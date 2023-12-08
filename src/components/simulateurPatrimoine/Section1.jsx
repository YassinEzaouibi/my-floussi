import React from 'react'

const Section1 = ({ years, revenuParMois, capitalFinal }) => {
    return (
        <div className=' text-forth text-lg mb-10 mt-3 text-center text-md '>
            <p>
                Au bout de <span className=' font-bold text-white'>{years}</span> ans,
                vous pouvez générer un revenu passif de

                <span className=' font-bold text-white'> {revenuParMois}</span> MAD/mois
                pour un capital final de <span className=' font-bold text-white'>{capitalFinal}</span> MAD
            </p>
        </div>
    )
}

export default Section1