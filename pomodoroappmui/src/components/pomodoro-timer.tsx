import { ThemeContext } from '@emotion/react';
import { Pause } from '@mui/icons-material';
import { Box, Button, createTheme, ThemeProvider, Typography, styled, toggleButtonClasses, Card, CardContent, Grid, Modal } from '@mui/material';
import React, { useEffect, useState, useCallback } from 'react'
import { useInterval } from '../hooks/use-interval';
import { LightTheme, DarkTheme } from '../themes';
import { useThemeHook } from '../hooks/use-theme';
import { secondsToTime } from '../utils/seconds-to-time';
import { Timer } from './timer';
import ToggleButton from '@mui/material/ToggleButton';
import { Statistics } from './statistics';
import { ButtonsComand } from './button';
import App from '../App';
import SettingsIcon from '@mui/icons-material/Settings';
import { flexbox } from '@mui/system';
import { OnModal } from './modal';
import { useOptions } from '../hooks/use-options';
import { updateUnionTypeNode } from 'typescript';



const bellStart = require("../sounds/src_sounds_bell-start.mp3");
const bellFinish = require("../sounds/src_sounds_bell-finish.mp3");

const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);







interface props {
    working: number;
    pomodorotime: number;
    shortRestTime: number;
    LongRestTime: number;
    cycles: number;
}
//MUDAR AS PROPRIEDADES DOS COMPONENTES PARA OPTIONS
export function PomodoroTimer(): JSX.Element {
    const { theme } = useThemeHook();
    const {options,setOptions} = useOptions();
    
    const [maintime, setmaintime] = React.useState(options.longRestTime);
    const [timecounting, settimecounting] = React.useState(false);
    const [working, setworking] = React.useState(true);
    const [resting, setresting] = React.useState(false);
    const [cyclesQtdManager, setCyclesQtdManager] = React.useState(new Array(options.cycles - 1).fill(true),);
    const [completedCycles, setcompletedCycles] = React.useState(0);
    const [fullWorkingTime, setfullWorkingTime] = React.useState(0);
    const [numberOfPomodoros, setnumberOfPomodoros] = React.useState(0);
    const [workstoppage, setstoppage] = React.useState(0);
    const [resthours, setresthours] = React.useState(0);
    const [isModal, setIsModal] = React.useState(false);



    useInterval(() => {
        console.log(`Rest: ${resting}`);
        console.log(`working: ${working}`);
        if (maintime === 0 && resting) configurework()
        if (maintime === 0 && working) configurerest(true)
        setmaintime(maintime - 1)
        if (maintime === 0) configurework()

        if (working) setfullWorkingTime(fullWorkingTime + 1)


    }, timecounting ? 1000 : null);




    const configurework = useCallback(() => {
        settimecounting(true);
        setworking(true);
        setresting(false);
        
        //setmaintime(options.pomodorotimer);
       
        
        audioStartWorking.play();
    }, [settimecounting, setworking, setresting, setmaintime, options.pomodorotimer])

        
    const configurerest = useCallback((Long: boolean) => {
        settimecounting(true);
        setworking(false);
        setresting(true);

        if (Long) {
            setmaintime(options.longRestTime);

        } else {
            setmaintime(options.shortRestTime);
        }
        audioStopWorking.play();
    }, [settimecounting, setworking, setresting, setmaintime, options.longRestTime, options.shortRestTime])

    useEffect(() => {
        if (working) document.body.classList.add('working');
        if (resting) document.body.classList.remove('working');
        if (maintime > 0) return;
        if (resting) setresthours(resthours + 1)
        if (timecounting) setresthours(resthours + 1)
        if (working && cyclesQtdManager.length > 0) {
            configurerest(false);
            cyclesQtdManager.pop();
        } else if (working && cyclesQtdManager.length <= 0) {
            configurerest(false);
            setCyclesQtdManager(new Array(options.cycles - 1).fill(true),)
            setcompletedCycles(completedCycles + 1);

        }
        if (working) setnumberOfPomodoros(numberOfPomodoros + 1);
        if (resting) configurework();setmaintime(options.working);;
       
    }, [working, resting, maintime, cyclesQtdManager, numberOfPomodoros, completedCycles, configurerest, setCyclesQtdManager, options.cycles])
   
    function onPauseClick() {
        settimecounting(!timecounting)
        //  if(timecounting)setresthours(resthours+1)
    }
   

    return (
        <Card
            sx={{
                height: '100%',
                width: '100%'
            }}>

            <CardContent
                sx={{
                    display: 'flex',
                    justifyContent: ' center',
                    alignItems: 'center',
                    padding: 0,
                    height: '100%',
                    width: '100%',
                }}
            >
                <Box sx={{
                    flex: .7,
                    borderRadius: '10px'
                }}
                    height={'70%'}
                    bgcolor={working ? theme.palette.secondary.main : theme.palette.primary.main}
                >

                    <Box height={'100%'} sx={{
                        display: 'flex',
                        gap: 5,
                        justifyContent: ' center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                        className='pomodoro'>

                        <Grid container rowSpacing={1} >
                            <Box
                                sx={{
                                    display: 'grid',
                                    gridAutoRows: '110px',
                                    justifyContent: 'flex-end',
                                    gridArea: 'header',

                                }}
                            >
                                <OnModal />
                            </Box>
                        </Grid>

                        <Timer maintime={maintime} working={working}></Timer>
                        <ButtonsComand pauseClick={onPauseClick} working={working} resting={resting} timecounting={timecounting}></ButtonsComand>
                        
                     
                        <Statistics completedCycles={completedCycles} fullWorkingTime={fullWorkingTime} numberOfPomodoros={numberOfPomodoros} resthours={resthours} />

                    </Box>

                </Box>
            </CardContent>
        </Card>





    )

}

