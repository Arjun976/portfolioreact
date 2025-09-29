import React, { useMemo, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { getTheme } from './theme'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


export default function App() {
const [mode, setMode] = useState(() => {
try {
return localStorage.getItem('theme') || 'light'
} catch {
return 'light'
}
})


useEffect(() => {
localStorage.setItem('theme', mode)
}, [mode])


const theme = useMemo(() => getTheme(mode), [mode])


return (
<ThemeProvider theme={theme}>
<Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
<Header mode={mode} setMode={setMode} />
<Container component="main" sx={{ flex: 1, py: 4 }} maxWidth="lg">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/projects" element={<Projects />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</Container>
<Footer />
</Box>
</ThemeProvider>
)
}