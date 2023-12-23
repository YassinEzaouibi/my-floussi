import React from 'react'
import { addSpacesToNumber } from '../../../../utils/sankeyData/sankeyCalucaltors'
const Results = ({ results }) => {


    return (
        <div className=' flex gap-3 flex-wrap my-2 mx-auto w-[100%] items-center justify-center '>
            {
                results.map((e, i) => (
                    <div key={e.name} className=' flex flex-col gap-y-4 mt-10 w-1/4 text-center'>
                        <h6 className=' text-grayLight opacity-80 text-sm'>{e.name}</h6>
                        <h5 className=' font-bold text-black'>{addSpacesToNumber(parseInt(e.value))}</h5>
                    </div>
                ))
            }
        </div>
    )
}

export default Results