import { alpha, styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const color = "#2dc08d"
const StyledSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color,
        '&:hover': {
            backgroundColor: alpha(color, theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: color,
    },
}));
export default StyledSwitch;