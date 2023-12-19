import React from 'react'
import useElementOnScreen from '../../../../hooks/useElementOnScreen'
import PosterImage from './PosterImage'
import PosterText from './PosterText'


const Poster = ({ poster, title, paragraphe, imgDir }) => {

    const [containerRef, isVisible] = useElementOnScreen()
    React.useEffect(() => {
        // console.log(containerRef.current)
        // console.log(isVisible)

    }, [isVisible, containerRef])
    return (
        <div

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
                <PosterImage poster={poster} />
            </div>}


        </div>
    )
}

export default Poster