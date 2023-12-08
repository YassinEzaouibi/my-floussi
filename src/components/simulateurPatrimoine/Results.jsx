import React from 'react'

const arr = [
    {
        name: 'Valeur future',
        value: 372640
    },

    {
        name: 'Valeur nette',
        value: 341787
    },
    {
        name: 'Capital Initial',
        value: 100000
    },
    {
        name: 'Total Versement',
        value: 792811
    },
    {
        name: 'Plus value nette',
        value: 152641
    },
    {
        name: 'Plus value brutte',
        value: 152641
    },

    {
        name: 'Revenu mensuel',
        value: 341787
    }
]
const Results = () => {


    return (
        <div className=' flex gap-6 flex-wrap'>
            {
                arr.map((e, i) => (
                    <div className=' flex flex-col gap-y-6 mt-10'>
                        <h6 className=' text-forth opacity-80'>{e.name}</h6>
                        <h5 className=' font-bold text-white'>{e.value}</h5>
                    </div>
                ))
            }
        </div>
    )
}

export default Results