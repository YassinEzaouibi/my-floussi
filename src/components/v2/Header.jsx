import React from 'react'
import { ArrowLeft, Calendar } from 'react-feather';
import { Link } from 'react-router-dom';
import lamp from '../../assets/imgs/lamp.svg'


const Header = () => {
    return (
        <div className=' w-full h-[90px]  border-borderBlue border-b-4 flex items-center justify-between bg-headerLight fixed top-0 left-0 header px-7 py-10 '>

            <div className=' flex items-center justify-start h-full w-1/3 gap-3 cursor-pointer' >
                <Link to={'/'}>
                    <ArrowLeft color="#707070" size={30} />
                </Link >
                <h6 className=' font-semibold text-3xl text-left text-grayLight'>
                    <Link to={'/'}>Retour</Link>
                </h6>
            </div>

            <div className=' flex items-center justify-start h-full w-1/3 gap-8' >
                <img src={lamp} className=' font-semibold text-3xl text-left text-grayLight'></img>
                <h5 className=' text-4xl text-black logo-text'>RoboAdvisorX</h5>
            </div>

            <div className=' flex items-center justify-end h-full w-1/3 gap-3 cursor-pointer' >
                <div className=' flex items-center h-full gap-2 text-sm font-bold text-mdBlue'>
                    <Calendar color="#003371" size={22} />
                    <h5 className=' hover:text-darkBlue whitespace-no-wrap '>Prendre rendez-vous</h5>
                </div>
                <Link className=' flex items-center justify-center bg-mainLight rounded-md align-middle text-center text-lg text-white h-[50px]
                w-[190px] py-4 shadow-md hover:shadow-2xl transition duration-500 ease-in-out'>Investir</Link>
            </div>



        </div>
    )
}

export default Header