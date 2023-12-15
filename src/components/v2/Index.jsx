import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Index = () => {
    return (
        <div className=' bg-bodyLight min-h-screen max-h-fit min-w-full relative '>
            {/* <Header /> */}
            <div className=' h-fit  min-w-full  absolute top-24  '>
                <div className=' content-container  w-[95%]  min-h-screen flex justify-center   '>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}

export default Index