import React, { memo } from 'react'

const AreaChartColorIndicators = () => {
    return (
        <div className=' text-forth text-sm flex justify-center gap-5 items-center  w-[90%] my-0 mx-auto'>
            <div className=' flex gap-1 items-center'>
                <div className=' rounded-lg h-[10px] w-[10px] bg-blue'></div>
                <h6>Capital</h6>
            </div>
            <div className=' flex gap-1 items-center'>
                <div className=' rounded-lg h-[10px] w-[10px] bg-yellow'></div>
                <h6>Versement cumulé</h6>
            </div>
            <div className=' flex gap-1 items-center'>
                <div className=' rounded-lg h-[10px] w-[10px] bg-orange'></div>
                <h6>PMV Bourse</h6>
            </div>

            <div className=' flex gap-1 items-center'>
                <div className=' rounded-lg h-[10px] w-[10px] bg-gray'></div>
                <h6>PMV Autre</h6>
            </div>

        </div>
    )
}

export default memo(AreaChartColorIndicators)