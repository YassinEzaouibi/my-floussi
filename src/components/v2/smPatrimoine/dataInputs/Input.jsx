import React from 'react'
import { useDispatch } from 'react-redux'

const Input = ({ title, v, unit, setV }) => {
    const dispatch = useDispatch()
    const onChange = (e) => {
        dispatch(setV(e.target.value))
    }
    return (
        <div className="input-container w-fit ">
            <div className='flex flex-col '>
                <h6 className='tracking-wide text-grayLight opacity-80 p-1 text-sm max-w-fit
                     align-bottom '>
                    {title}
                </h6>
                <div className=' w-fit flex items-end border-b border-b-grayLight active:border-b-blue active:border-b-2 ' >
                    <input
                        style={{ width: '100%' }}
                        className="input-field-smPatrimoine  text-right  placeholder-white border-b-0 "
                        type="number"
                        onChange={onChange}
                        value={v?.toString()}

                    />
                    <span className=' text-grayLight self-center'>
                        {unit}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Input