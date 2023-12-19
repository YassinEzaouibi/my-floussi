import React, { useEffect } from 'react'
import useElementOnScreen from '../../../../hooks/useElementOnScreen'
import Poster from './Poster'

const Potsers = ({ posters }) => {
  return (
    posters
    &&
    <div
      className=' my-10 w-[95%] mx-auto'>
      {posters.map((p, i) => {
        let imgDir

        i % 2 == 0 ? imgDir = "r" : imgDir = "l"
        return (
          <div
            key={p.title}
            className=' '>
            <Poster imgDir={imgDir} title={p.title} paragraphe={p.paragraphe} poster={p.img} />
          </div>
        )
      })}
    </div>
  )
}

export default Potsers