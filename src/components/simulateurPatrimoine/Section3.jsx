import React from 'react'

const Section3 = ({ versementsCumule, plusValueNette, revenuMensuel, years }) => {
    return (
        <div className=' text-forth text-lg mb-10 mt-3 text-center text-md '>
            <p>
                Celui-ci se compose de <span className=' font-bold text-white'>{versementsCumule} </span> MAD
                de versements et de <span className=' font-bold text-white'>{plusValueNette} </span> MAD d'intérêts perçus
                pour un revenu mensuel de  <span className=' font-bold text-white'>{revenuMensuel} </span> MAD
                à partir de la <span className=' font-bold text-white'>{years}</span> eme année.
            </p>
        </div>
    )
}

export default Section3