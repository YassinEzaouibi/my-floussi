import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Outlet, Link } from "react-router-dom";


function Home() {

    return (


        <div className=' app min-h-screen '>
            <div className=" min-w-full  min-h-full p-4 ">
                <div className=' fixed z-30 start-0 top-0 w-full bg-main  flex justify-between align-middle mb-22  '>
                    <h1 className='text-gold-500 mb-10 max-w-fit rounded-md  my-2 mx-5 font-bold text-3xl tracking-wide align-middle flex items-center pt-6	'>My Floussy</h1>
                    <ul className=' flex gap-11 justify-start text-forth mr-8  '>
                        <Link className='flex items-center' to={'/'}>
                            <li className='cursor-pointe align-middle	 transition duration-300 ease-in-out hover:scale-105 '>
                                Independance financiere
                            </li></Link>
                        <Link className='flex items-center' to={'/c'}>
                            <li className='cursor-pointer transition duration-300 ease-in-out hover:scale-105'>Claculateur de budget</li>
                        </Link >
                        <Link className='flex items-center' to={'/s'}>
                            <li className='cursor-pointer transition duration-300 ease-in-out hover:scale-105'>Simulateur de patrimoine</li>
                        </Link>
                    </ul>
                </div>

                <div className=' mt-36'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Home
