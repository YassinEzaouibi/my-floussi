
import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';



const StyledTab = styled((props) => <Tab
    style={{ minWidth: '32%' }}
    disableRipple {...props} />)(
        ({ theme }) => ({

            textTransform: 'none',
            fontWeight: theme.typography.fontWeightRegular,
            fontSize: theme.typography.pxToRem(15),
            marginRight: theme.spacing(1),
            color: 'rgba(255, 255, 255, 0.7)',
            '&.Mui-selected': {
                color: '#fff',
            },
            '&.Mui-focusVisible': {
                backgroundColor: 'rgba(100, 95, 228, 0.32)',
            },
        }),
    );


export default StyledTab