import React from 'react'
import IconButton from '@mui/material/IconButton'
import GitHub from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn'
import Twitter from '@mui/icons-material/Twitter'
import Box from '@mui/material/Box'


export default function SocialLinks({ sx }) {
return (
<Box sx={{ display: 'flex', gap: 1, ...sx }}>
<IconButton component="a" href="#" aria-label="github"><GitHub /></IconButton>
<IconButton component="a" href="#" aria-label="linkedin"><LinkedIn /></IconButton>
<IconButton component="a" href="#" aria-label="twitter"><Twitter /></IconButton>
</Box>
)
}