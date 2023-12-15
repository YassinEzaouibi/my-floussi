import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setTempUserResponses, setUserHasSelectedChoice } from '../../../redux/questionnaireSlice'
import { useSwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';

const BinaryChoices = ({ onNo, choices, setShow, question }) => {
    const dispatch = useDispatch()
    const [selected, setSelected] = useState(false)
    const swiperSlide = useSwiperSlide();
    const refresh = useSelector(state => state.questionnaire.refreshSlidersState)
    const [yesSelected, setYesSelected] = useState(false)

    const selectChoice = (id, value) => {
        setSelected(id)
        setShow(value)
        setYesSelected(value)
        if (value === true) {
            dispatch(setUserHasSelectedChoice(false))
        } else {
            dispatch(setUserHasSelectedChoice(true))
        }
    }


    // const pass = useSelector(state => state.questionnaire.userHasSelectedChoice)


    useEffect(() => {
        if (selected !== false && swiperSlide.isActive && yesSelected === false) {

            dispatch(setUserHasSelectedChoice(true))
        }
    }, [refresh])


    return (
        <div className="mydict mt-10">
            <div className='w-full'>
                {
                    choices.map((c) => (
                        <div
                            style={{ backgroundColor: selected === c.id ? '#AACEEC' : '#fff' }}
                            onClick={() => {
                                selectChoice(c.id, c.status)
                                dispatch(setTempUserResponses({
                                    question,
                                    score: c.status === false ? 0 : 1,
                                    response: c.name
                                }))

                                c.status === false ? onNo() : null
                            }}
                            key={c.id}
                            className=' bg-secondaryLight shadow-sm transition-all duration-300 hover:shadow-sm rounded-md cursor-pointer py-3 px-3 h-[50px]'>

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

export default BinaryChoices