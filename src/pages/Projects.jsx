import React, { useMemo, useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import ProjectCard from '../components/ProjectCard'
import Button from '@mui/material/Button'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const PROJECTS = [
  { id: 1, title: 'Portfolio Site', image: '', tech: ['React', 'MUI'], demo: '#', repo: '#' },
  { id: 2, title: 'Todo App', image: '', tech: ['React', 'LocalStorage'], demo: '#', repo: '#' },
  { id: 3, title: 'ResumeBuilder UI', image: '', tech: ['React', 'MUI'], demo: '#', repo: '#' }
]

// 🎨 Reuse same theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'rgb(65,62,62)',
      paper: '#3a3838'
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

export default function Projects() {
  const [query, setQuery] = useState('')
  const [techFilter, setTechFilter] = useState('')

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    return PROJECTS.filter(
      p =>
        (!q || p.title.toLowerCase().includes(q)) &&
        (!techFilter || p.tech.join(' ').toLowerCase().includes(techFilter.toLowerCase()))
    )
  }, [query, techFilter])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh', p: 3 }}>
        <Typography variant="h4" gutterBottom color="secondary">
          Projects
        </Typography>

        {/* Search + Filter controls */}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
          <TextField
            label="Search"
            size="small"
            value={query}
            onChange={e => setQuery(e.target.value)}
            variant="outlined"
            sx={{
              input: { color: 'text.primary' },
              label: { color: 'text.secondary' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'secondary.main' },
                '&:hover fieldset': { borderColor: 'secondary.main' },
                '&.Mui-focused fieldset': { borderColor: 'secondary.main' }
              }
            }}
          />
          <TextField
            label="Filter by tech"
            size="small"
            value={techFilter}
            onChange={e => setTechFilter(e.target.value)}
            variant="outlined"
            sx={{
              input: { color: 'text.primary' },
              label: { color: 'text.secondary' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'secondary.main' },
                '&:hover fieldset': { borderColor: 'secondary.main' },
                '&.Mui-focused fieldset': { borderColor: 'secondary.main' }
              }
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setQuery('')
              setTechFilter('')
            }}
            sx={{
              backgroundColor: theme.palette.secondary.main,
              '&:hover': { backgroundColor: theme.palette.secondary.main } // no hover change
            }}
          >
            Reset
          </Button>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={2}>
          {filtered.map(p => (
            <Grid item xs={12} sm={6} md={4} key={p.id}>
              <ProjectCard {...p} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  )
}
