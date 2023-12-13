import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setUserHasSelectedChoice } from '../../../redux/questionnaireSlice'
import { useSwiperSlide } from 'swiper/react';

const Choices = ({ choices }) => {
    const swiperSlide = useSwiperSlide();

    // const pass = useSelector(state => state.questionnaire.userHasSelectedChoice)
    const refresh = useSelector(state => state.questionnaire.refreshSlidersState)
    const dispatch = useDispatch()
    const [selected, setSelected] = useState(false)

    const selectChoice = (id) => {
        setSelected(id)
        dispatch(setUserHasSelectedChoice(true))
    }

    useEffect(() => {
        if (selected !== false && swiperSlide.isActive) {

            dispatch(setUserHasSelectedChoice(true))
        }
    }, [refresh])

    return (
        <div className="mydict mt-10">
            <div className='w-full'>
                {
                    choices.map((c, i) => (
                        <div
                            style={{ backgroundColor: selected === c.id ? '#AACEEC' : '#fff' }}
                            onClick={() => selectChoice(c.id)}
                            key={c.id}
                            className=' bg-secondaryLight shadow-md transition-all duration-300 hover:shadow-lg rounded-md cursor-pointer py-3 px-3 h-[50px]'>

                            <h5 className=' text-mainLight text-center'>
                                {c.name}
                            </h5>

                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default Choices