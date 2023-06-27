
import { Box, Button, createTheme, ThemeProvider, Typography, styled, toggleButtonClasses, Grid, Paper } from '@mui/material';
import React, { useEffect, useState, useCallback } from 'react'

import { useThemeHook } from '../hooks/use-theme';
import { secondsToTime } from '../utils/seconds-to-time';
interface props {
    completedCycles: number;
    fullWorkingTime: number;
    numberOfPomodoros: number;
    resthours: number;
}
export function Statistics(props: props): JSX.Element {
    // const{theme}=useThemeHook();

    // const [completedCycles, setcompletedCycles] = React.useState(0);
    // const [fullWorkingTime, setfullWorkingTime] = React.useState(0);
    // const [numberOfPomodoros, setnumberOfPomodoros] = React.useState(0);

    // const [resthours, setresthours] = React.useState(0);
    
    const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:"transparent",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: '#eeeeee'
      }));
    return (

        <Box className='details'>
            <Grid container columns={{ xs: 8, md: 12 }} >
                <Grid item xs >
               <Item>  Horas&nbsp;trabalhadas</Item>
                <Item>{secondsToTime(props.fullWorkingTime)}</Item>
                    
                </Grid>
                <Grid item xs >
                <Item>  Ciclos concluidos</Item>
                <Item>   {props.completedCycles}</Item>
                  
                </Grid >
                <Grid  >
                <Typography> <Item>  Pomodoros&nbsp;concluídos </Item></Typography>
                <Item>  {props.numberOfPomodoros} </Item>
                   
                </Grid>
                <Grid item xs>
                <Item>  Periodos&nbsp;de&nbsp;pausa </Item>
                <Item> {props.resthours} </Item>
                    
               </Grid>
            </Grid>

        </Box>
    )
}