import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  CssBaseline
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SocialLinks from '../components/SocialLinks';
import portImage from '../assets/port_image2.png';

// Simple typing hook
function useTyping(words, speed = 120, pause = 800) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const current = index % words.length;
    const fullText = words[current];

    let timeout = setTimeout(() => {
      setText(prev =>
        isDeleting
          ? fullText.slice(0, prev.length - 1)
          : fullText.slice(0, prev.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex(prev => prev + 1);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words, speed, pause]);

  return text;
}

// 🎨 Gray + Purple Theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'rgb(65,62,62)',
      paper: 'rgb(65,62,62)'
    },
    text: {
      primary: '#ffffff',
      secondary: '#cccccc'
    },
    primary: { main: '#6a1b9a' },
    secondary: {
      main: '#9c27b0',
      dark: '#7b1fa2',
      contrastText: '#fff'
    }
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', sans-serif`,
  }
});

export default function HomePage() {
  const typed = useTyping([
    'Web Developer',
    'React Enthusiast',
    'Open Source Contributor'
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          color: 'text.primary',
          p: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' }
        }}
      >
        {/* Left: Content */}
        <Box sx={{ flex: 1, pr: { md: 4 }, textAlign: { xs: 'center', md: 'left' } }}>
          <Stack spacing={3} alignItems={{ xs: 'center', md: 'flex-start' }}>
            <Typography variant="h3" component="h1">
              Hi, I'm Arjun K A
            </Typography>
            <Typography variant="h5">
              I build things for the web —{' '}
              <span style={{ fontWeight: 700 }}>{typed}</span>
              <span className="cursor">|</span>
            </Typography>

            <Typography sx={{ maxWidth: 640 }} color="text.secondary">
              Short intro about you. Say what you do, what you love building,
              and your focus.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color="secondary"
                href="/resume.pdf"
                download
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  '&:hover': {
                    backgroundColor: theme.palette.secondary.main
                  }
                }}
              >
                Download Resume
              </Button>
              <Button variant="outlined" color="secondary" href="/projects">
                View Projects
              </Button>
            </Stack>

            <SocialLinks sx={{ mt: 2 }} />
          </Stack>
        </Box>

        {/* Right: Image */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end' },
            mt: { xs: 4, md: 0 }
          }}
        >
          <Box
            component="img"
            src={portImage}
            alt="Portfolio"
            sx={{
              maxWidth: { xs: '80%', md: '100%' },
              height: 'auto',
              borderRadius: 0, // No border radius
              boxShadow: 'none' // Remove shadow for flat look
            }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
