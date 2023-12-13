import React from 'react'

const Input = ({ title, v, onChange, mad }) => {
    return (
        <div className="input-container my-12 ">
            <div className='flex flex-col '>
                <h6 className='tracking-wide text-grayLight opacity-80 p-1 text-sm max-w-fit
                     align-bottom '>
                    {title}
                </h6>
                <div className=' flex items-end border-b border-b-grayLight'>
                    <input
                        style={{ width: '100%' }}
                        className="input-field-smPatrimoine placeholder-white border-b-0 "
                        type="number"
                        onChange={onChange}
                        value={v?.toString()}

                    />
                    <span className=' text-grayLight self-center'>
                        {mad ? 'MAD' : '%'}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Input