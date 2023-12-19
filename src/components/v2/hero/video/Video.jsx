import React from 'react'
import hd from '../../../../assets/imgs/hero-videos/hd.mp4'
const Video = () => {
    return (
        <div className=' w-[80%] mx-auto my-11 relative flex items- justify-center '>
            <div className=' h-full w-full'>
                <video autoPlay className=' rounded-md shadow-md w-full ' muted loop src={hd}></video>

            </div>

            <div className=' flex items-center absolute w-[60%] mx-auto h-full top-0 text-white text-sm lg:text-2xl text-center '>

                <h1>Une valeur nette de 1,2 million de dollars vous positionnerait parmi le 1 % des plus riches au monde</h1>
            </div>

        </div>
    )
}

export default Video