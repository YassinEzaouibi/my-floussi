import React from 'react'
import Header from './header/Header'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div className=" home min-h-screen min-w-screen  h-fit " >
            <Header />
            <div className='w-full h-full overflow-hidden'>
                <Outlet />
            </div>
        </div>
    )
}

export default Home