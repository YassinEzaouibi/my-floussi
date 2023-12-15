import React from 'react'
import Header from './header/Header'
import Hero from './hero/Hero'

const Home = () => {
    return (
        <div className=" home min-h-screen min-w-screen  h-fit " >
            <Header />

            <Hero />
        </div>
    )
}

export default Home