import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setTempUserResponses, setUserHasSelectedChoice } from '../../../redux/questionnaireSlice'
import Calendar from '../../../utils/svgs/Calendar'
import House from '../../../utils/svgs/House'
import Key from '../../../utils/svgs/Key'
import { useSwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux'

const IconChoices = ({ choices, question }) => {
    const dispatch = useDispatch()

    const [selected, setSelected] = useState(false)
    const swiperSlide = useSwiperSlide();

    const selectChoice = (id) => {
        dispatch(setUserHasSelectedChoice(true))
        setSelected(id)
    }



    const refresh = useSelector(state => state.questionnaire.refreshSlidersState)


    useEffect(() => {
        if (selected !== false && swiperSlide.isActive) {

            dispatch(setUserHasSelectedChoice(true))
        }

    }, [refresh])
    return (
        <div>
            {
                choices.map((c, i) => (
                    <div key={c.id}
                        style={{ backgroundColor: selected === c.id ? '#AACEEC' : '#fff' }}
                        onClick={() => {
                            selectChoice(c.id)

                            dispatch(setTempUserResponses({
                                question,
                                score: i + 1,
                                response: c.name
                            }))
                        }}
                        className={`w-full h-fit py-8 px-5 my-7 rounded-md shadow-sm duration-300 transition-all hover:shadow-lg active:bg-lightBlue cursor-pointer bg-${selected === c.id ? 'lightBlue' : 'white'} border border-lightBlue`}
                    >
                        <div className=' flex gap-x-5 items-center text-grayLight'>
                            {c?.icon && <c.icon />}
                            <h5 className=' align-middle'>{c.name}</h5>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default IconChoices