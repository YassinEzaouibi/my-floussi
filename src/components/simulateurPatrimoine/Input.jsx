import React from 'react'

const Input = ({ title, v, onChange }) => {
    return (
        <div className="input-container w-full ">
            <input
                style={{ width: '100%' }}

                className="input-field placeholder-white "
                type="text"
                onChange={onChange}

                value={v}


            />
            <label htmlFor="input-field" className="input-label text-white">{title}</label>
            <span className="input-highlight text-white"></span>

        </div>
    )
}

export default Input