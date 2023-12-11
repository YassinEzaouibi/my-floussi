import React from 'react'

const Header = ({ setV, v }) => {

    return (
        <div className='h-[80px] w-full border-b border-b-grayLight flex gap-6 mb-9'>
            <h5
                onClick={() => setV(0)}
                className={`max-w-fit px-2 py-1  text-black text-xl h-full border-b-${v === 0 ? 4 : 0} border-b-mainLight cursor-pointer `}>
                Revenus
            </h5>
            <h5
                onClick={() => setV(1)}
                className={`max-w-fit px-2 py-1  text-black text-xl h-full border-b-${v === 1 ? 4 : 0} border-b-mainLight cursor-pointer `}>
                Investissements
            </h5>
            <h5
                onClick={() => setV(2)}
                className={`max-w-fit px-2 py-1  text-black text-xl h-full border-b-${v === 2 ? 4 : 0} border-b-mainLight cursor-pointer `}>
                Dépenses
            </h5>
        </div>
    )
}

export default Header