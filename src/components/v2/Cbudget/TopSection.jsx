import React from 'react'

import Header from './Header'
import Tabs from './tabs/Tabs'

const TopSection = ({ sankeyRef }) => {


    return (
        <div className=' w-full flex flex-col justify-center  lg:w-[70%] mx-auto overflow-hidden '>

            <Header />
            <Tabs sankeyRef={sankeyRef} />




        </div>
    )
}

export default TopSection