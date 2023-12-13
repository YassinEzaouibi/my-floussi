import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setInputValue } from '../../../redux/questionnaireSlice'

const Inputs = ({ inputs, categorieId, questionId }) => {
    const dispatch = useDispatch()

    const handleChange = (e, id) => {
        const value = e.target.value
        dispatch(setInputValue({
            id,
            categorieId,
            questionId,
            value,
        }))
    }
    return (
        <div className=' w-full h-fit mt-10' >
            {
                inputs.map((inp) => (
                    <div key={inp.id} className=' my-5 '>
                        <h5 key={inp.id} className=' text-black  text-md mb-2 '>{inp.label}</h5>
                        <input type={'number'} value={inp.value.toString()} onChange={(e) => handleChange(e, inp.id)} className=' bg-white outline-none w-full text-black border border-grayLight px-3 py-5 rounded-md' />
                    </div>

                ))
            }
        </div>
    )
}

export default Inputs