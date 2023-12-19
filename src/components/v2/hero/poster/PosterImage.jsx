import React from 'react'

const PosterImage = ({ poster }) => {
    return (
        <div className=' w-full flex justify-end' >
            <img loading="lazy" src={poster} style={{ objectFit: 'contain' }} alt="" />
        </div>
    )
}

export default PosterImage