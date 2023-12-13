import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const AgeInput = ({ date, setDate }) => {

    const handleDate = (newDate) => {

        setDate(newDate)

    }


    return (
        <div className=' w-full flex justify-center items-center   gap-x-5 px-4 py-6'>
            <h5>Votre Age</h5>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    value={date}
                    label=''
                    format='DD/MM/YYYY'
                    onChange={handleDate}
                />

            </LocalizationProvider>
            {/* <input type={'date'} /> */}
        </div>
    )
}

export default AgeInput