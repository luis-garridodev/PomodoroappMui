import { ThemeContext } from '@emotion/react';
import { Pause } from '@mui/icons-material';
import { Box, Button, createTheme, ThemeProvider, Typography, styled, toggleButtonClasses } from '@mui/material';
import React, { useEffect, useState, useCallback, useContext } from 'react'
import { useInterval } from '../hooks/use-interval';
import { LightTheme,DarkTheme} from '../themes';
import { useThemeHook } from '../hooks/use-theme';
import { secondsToTime } from '../utils/seconds-to-time';
import { Timer } from './timer';
import ToggleButton from '@mui/material/ToggleButton';
import { Statistics } from './statistics';
import { optionsContext } from '../contexts/optioncontext';
interface props {
    working: boolean;
    resting:boolean;
    timecounting: boolean;
    pauseClick: () => void
  

}
export function ButtonsComand(props:props): JSX.Element {

    
//  if(timecounting)setresthours(resthours+1)

return(

<Box className='controls'>
              
<Button  color='primary' variant='contained' size='large' disabled={props.resting ?true:false}>{"work"}


</Button>



<Button color='secondary'variant='contained' size='large' onClick={props.pauseClick} disabled={props.working ? true : false}>{"rest"}</Button>



<Button variant='contained' aria-label="outlined button group"
   size='large' onClick={props.pauseClick} disabled={!props.working ? true : false || props.resting ? true : false}>

    {props.timecounting? 'pause' : 'play'} </Button>




</Box> )
}


