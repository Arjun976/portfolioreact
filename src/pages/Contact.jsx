import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// 🎨 Same gray + purple theme
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

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  function validate() {
    if (!form.name.trim()) return 'Name is required.'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return 'Enter a valid email.'
    if (form.message.trim().length < 10) return 'Message should be at least 10 characters.'
    return ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    const v = validate()
    if (v) return setError(v)

    // Here you'd submit to your backend or email service.
    setSuccess('Message sent! I will get back to you soon.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: 'background.default',
          color: 'text.primary',
          minHeight: '100vh',
          p: 3
        }}
      >
        <Typography variant="h4" gutterBottom color="secondary">
          Contact
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ maxWidth: 600, bgcolor: 'background.paper', p: 3, borderRadius: 2 }}
        >
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {success}
            </Alert>
          )}

          <TextField
            fullWidth
            label="Full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            sx={{ mb: 2 }}
            InputLabelProps={{ style: { color: '#ccc' } }}
            InputProps={{
              style: { color: '#fff' }
            }}
          />

          <TextField
            fullWidth
            label="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            sx={{ mb: 2 }}
            InputLabelProps={{ style: { color: '#ccc' } }}
            InputProps={{
              style: { color: '#fff' }
            }}
          />

          <TextField
            fullWidth
            label="Message"
            multiline
            minRows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            sx={{ mb: 2 }}
            InputLabelProps={{ style: { color: '#ccc' } }}
            InputProps={{
              style: { color: '#fff' }
            }}
          />

          <Button
            type="submit"
            color="secondary"
            variant="contained"
            sx={{
              backgroundColor: theme.palette.secondary.main,
              '&:hover': { backgroundColor: theme.palette.secondary.main }
            }}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  )
}