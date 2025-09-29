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
Hey, I'm Arjun K A, a BTEC graduate with a real passion for web development. I love diving into React and modern JavaScript frameworks to build slick, user-friendly websites and apps that just work. I'm all about creating stuff that looks great and solves real problems. As an open-source enthusiast, I get a kick out of sharing what I know and teaming up with other devs worldwide. I'm always learning, keeping up with the latest tech, and pushing myself to create awesome web experiences. When I'm not coding, you’ll find me geeking out over new trends or tinkering on projects that challenge what the web can do.              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, bgcolor: 'background.paper' }}>
              <Typography variant="h6" color="secondary">Education</Typography>
              <Typography>• Kerala Technical University — BTECH, 2025</Typography>

              <Typography sx={{ mt: 2 }} variant="h6" color="secondary">
                Career Goals
              </Typography>
              <Typography>• Master Full-Stack Development: Become proficient in both front-end (React, JavaScript) and back-end (Node.js, databases) to build end-to-end web solutions.</Typography>
                <Typography>• Contribute to Open Source: Actively participate in open-source projects to collaborate with the developer community and give back.</Typography>
                <Typography>• Continuous Learning: Stay updated with the latest web technologies and best practices to ensure my skills remain relevant and cutting-edge.</Typography>
                <Typography>• Build a Strong Portfolio: Create and showcase a diverse range of projects that demonstrate my skills and creativity in web development.</Typography>
                <Typography>• Network and Collaborate: Connect with other developers, attend industry events, and collaborate on projects to grow professionally.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}
