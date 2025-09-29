import { createTheme } from '@mui/material/styles'


export const getTheme = (mode = 'light') =>
createTheme({
palette: { mode },
components: {
MuiButton: { defaultProps: { disableElevation: true } }
}
})