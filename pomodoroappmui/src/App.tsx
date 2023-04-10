import React from 'react';
import { JsxAttribute } from 'typescript';
import { BrowserRouter } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Box, Grid } from '@mui/material';
import { PomodoroTimer } from './components/pomodoro-timer';
import { APPThemeProvider } from './contexts/themecontext';
export default function App() {
  return (
   
   
      <APPThemeProvider>
       <Box >
          
             
      <PomodoroTimer pomodorotime={10}
       shortRestTime={2} 
       LongRestTime={5}
       cycles={4}
       />
       </Box>
       
       </APPThemeProvider>
   
  
  );
}


