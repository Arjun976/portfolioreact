import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// 🎨 Same theme as Home
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'rgb(65,62,62)', // page background
      paper: '#3a3838' // slightly lighter gray for cards
    },
    text: {
      primary: '#ffffff',
      secondary: '#cccccc'
    },
    primary: {
      main: '#6a1b9a'
    },
    secondary: {
      main: '#9c27b0',
      dark: '#7b1fa2',
      contrastText: '#fff'
    }
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', sans-serif`
  }
})

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh', p: 3 }}>
        <Typography variant="h4" gutterBottom color="secondary">
          About Me
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, bgcolor: 'background.paper' }}>
              <Typography paragraph color="text.secondary">
                Write a personal bio here. Education: B.Tech in CS (example). Mention career goals and what kind of roles you are targeting.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, bgcolor: 'background.paper' }}>
              <Typography variant="h6" color="secondary">Education</Typography>
              <Typography>• University Name — Degree, Year</Typography>

              <Typography sx={{ mt: 2 }} variant="h6" color="secondary">
                Career Goals
              </Typography>
              <Typography>• Short bullets about goals and learning plans</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}
