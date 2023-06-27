import React from 'react';
import { JsxAttribute } from 'typescript';
import { BrowserRouter } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Box, Grid } from '@mui/material';
import { PomodoroTimer } from './components/pomodoro-timer';
import { APPThemeProvider } from './contexts/themecontext';
import { optionsContext, OptionsContextProvider} from './contexts/optioncontext';
import { useOptions } from './hooks/use-options';

export default function App() {
  return (
    <APPThemeProvider>
      <OptionsContextProvider >
        <Box sx={{ height: '100vh' }} >
          <PomodoroTimer 
        
        
          />
        </Box>
        
      </OptionsContextProvider>
    </APPThemeProvider>


  );
}


