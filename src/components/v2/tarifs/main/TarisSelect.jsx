import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { setTypeTarifs } from '../../../../redux/tarifsSlice';
import { useDispatch } from 'react-redux';

export default function TypeTarifsSelect() {
    const dispatch = useDispatch()
    const { typeTarifs } = useSelector(state => state.tarifs)
    // const [typeTarifs, setTypeTarifs] = React.useState(1.80);

    const handleChange = (event) => {
        dispatch(
            setTypeTarifs(event.target.value)
        )
    }

    return (
        <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={typeTarifs}
                    label="Type"
                    onChange={handleChange}
                    defaultValue={typeTarifs}
                >
                    <MenuItem value={1.8}>Actions</MenuItem>
                    <MenuItem value={0.90}>Obligataires</MenuItem>
                    <MenuItem value={0.30}>Monétaires</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}