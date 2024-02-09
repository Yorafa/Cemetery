// src/theme.ts
'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

// Create a dark theme instance.
const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#1976d2',
        },
        secondary: {
          main: '#f50057',
        },
        info: {
          main: '#0288d1',
        },
      },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});

export default theme;
