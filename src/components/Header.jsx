import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'


export default function Header({ mode, setMode }) {
return (
<AppBar position="sticky" color="transparent" elevation={0}>
<Toolbar>
<Typography variant="h6" sx={{ flexGrow: 1 }}>
<Link component={RouterLink} to="/" color='secondary' underline="none">ARJUN K A</Link>
</Typography>


<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
<Link color='secondary' component={RouterLink} to="/" sx={{ mx: 1 }}>Home</Link>
<Link color='secondary' component={RouterLink} to="/about" sx={{ mx: 1 }}>About</Link>
<Link color='secondary' component={RouterLink} to="/projects" sx={{ mx: 1 }}>Projects</Link>
<Link color='secondary' component={RouterLink} to="/contact" sx={{ mx: 1 }}>Contact</Link>
</Box>


<IconButton onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} aria-label="toggle theme">
{mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
</IconButton>
</Toolbar>
</AppBar>
)
}