import React from 'react'

const MainParagraphe = ({ versementsCumule, plusValueNette, revenuMensuel, years }) => {
    return (
        <div className=' text-black text-sm my-10  text-center text-md  opacity-90 '>
            <p>
                Celui-ci se compose de <span className=' font-bold text-lg opacity-100 text-black'>{versementsCumule} </span> MAD
                de versements et de <span className=' font-bold text-lg opacity-100 text-black'>{plusValueNette} </span> MAD d'intérêts perçus
                pour un revenu mensuel de  <span className=' font-bold text-lg opacity-100 text-black'>{revenuMensuel} </span> MAD
                à partir de la <span className=' font-bold text-lg opacity-100 text-black'>{years}</span> eme année.
            </p>
        </div>
    )
}

export default MainParagraphe