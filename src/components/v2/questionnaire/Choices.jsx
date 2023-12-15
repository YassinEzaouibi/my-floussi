import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setTempUserResponses, setUserHasSelectedChoice } from '../../../redux/questionnaireSlice'
import { useSwiperSlide, useSwiper } from 'swiper/react';

const Choices = ({ choices, question }) => {
    const swiperSlide = useSwiperSlide();
    const swiper = useSwiper();
    const [score, setScore] = useState(0)
    const [response, setResponse] = useState('')

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


        if (swiperSlide.isActive) {
            dispatch(setTempUserResponses({

                question,
                response,
                score,
            }))
        }
    }, [refresh, score, response])


    return (
        <div className="mydict mt-10">
            <div className='w-full'>
                {
                    choices.map((c, i) => (
                        <div
                            style={{ backgroundColor: selected === c.id ? '#AACEEC' : '#fff' }}
                            onClick={() => {
                                selectChoice(c.id)
                                setScore(i + 1)
                                setResponse(c.name)
                            }}
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