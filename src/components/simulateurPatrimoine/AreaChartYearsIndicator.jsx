import React, { memo } from 'react'

const AreaChartYearsIndicator = ({ years }) => {
    return (
        years && <div className=' opacity-70 text-forth flex justify-between items-center  w-[90%] my-0 mx-auto'>
            <h6 className=' text-left'>Aujourd'hui</h6>
            <h6 className=' text-right'>{years} ans</h6>

        </div>
    )
}

export default memo(AreaChartYearsIndicator)