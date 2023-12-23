import React, { useEffect } from 'react'
import useElementOnScreen from '../../../../hooks/useElementOnScreen'
import PosterImage from './PosterImage'
import PosterText from './PosterText'
import AOS from 'aos'


const Poster = ({ poster, title, paragraphe, imgDir }) => {
    useEffect(() => {
        AOS.init({
            duration: 500, // Animation duration
            offset: 100,    // Offset (in pixels) from the top of the element
            easing: 'ease-in-out', // Easing type
        });
    }, [])
    const [containerRef, isVisible] = useElementOnScreen()

    return (
        <div
            data-aos="fade-left"


            ref={containerRef}
            style={{
                opacity: isVisible ? 1 : 0,
            }}
            className='transition-all duration-300  flex flex-col md:flex-row gap-10 my-10'>
            <div className=' w-full block lg:hidden lg:w-0'>
                <PosterImage poster={poster} />
            </div>

            {imgDir === "r" && <div className=' hidden lg:block w-full'>
                <PosterImage poster={poster} />
            </div>}
            <PosterText title={title} paragraphe={paragraphe} />
            {imgDir === "l" && <div className=' hidden lg:block w-full'>
                <PosterImage imgDir={imgDir} poster={poster} />
            </div>}


        </div>
    )
}

export default Poster