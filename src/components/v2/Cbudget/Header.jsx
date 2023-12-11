import React from 'react'

const Header = () => {
    return (
        <div className='my-12 h-[200px]  flex flex-col gap-10 ' >
            <h1 className=' font-bold text-5xl text-center text-darkBlue'>Calculateur de budget</h1>
            <p className=' text-center text-graySecondary text-lg font-semibold'>
                Voyez ce que représente visuellement la répartition de vos dépenses et découvrez votre taux d'épargne mensuel.
                Il vous suffit juste d'inscrire vos revenus et vos dépenses
            </p>
        </div>
    )
}

export default Header