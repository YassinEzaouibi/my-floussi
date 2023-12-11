import React from 'react'

import Header from './Header'
import Tabs from './tabs/Tabs'

const TopSection = ({ sankeyRef }) => {


    return (
        <div className=' flex flex-col justify-center  w-[70%] mx-auto '>

            <Header />
            <Tabs sankeyRef={sankeyRef} />




        </div>
    )
}

export default TopSection