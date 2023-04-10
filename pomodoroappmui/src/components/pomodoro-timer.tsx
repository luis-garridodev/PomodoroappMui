import { ThemeContext } from '@emotion/react';
import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState, useCallback } from 'react'
import { useInterval } from '../hooks/use-interval';
import { secondsToTime } from '../utils/seconds-to-time';
import { Timer } from './timer';


const bellStart = require("../sounds/src_sounds_bell-start.mp3");
const bellFinish = require("../sounds/src_sounds_bell-finish.mp3");

const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);







interface props {
    pomodorotime: number;
    shortRestTime: number;
    LongRestTime: number;
    cycles: number;
}
export function PomodoroTimer(props: props): JSX.Element {
    const [maintime, setmaintime] = React.useState(props.pomodorotime);
    const [timecounting, settimecounting] = React.useState(false);
    const [working, setworking] = React.useState(false);
    const [resting, setresting] = React.useState(false);
    const [cyclesQtdManager, setCyclesQtdManager] = React.useState(new Array(props.cycles - 1).fill(true),);
    const [completedCycles, setcompletedCycles] = React.useState(0);
    const [fullWorkingTime, setfullWorkingTime] = React.useState(0);
    const [numberOfPomodoros, setnumberOfPomodoros] = React.useState(0);
    useInterval(() => {
        setmaintime(maintime - 1)
        if (working) setfullWorkingTime(fullWorkingTime + 1)

    },
        timecounting ? 1000 : null);
    const configurework = useCallback(() => {
        settimecounting(true);
        setworking(true);
        setresting(false);
        setmaintime(props.pomodorotime);
        audioStartWorking.play();
    }, [settimecounting, setworking, setresting, setmaintime, props.pomodorotime])
    const configurerest = useCallback((Long: boolean) => {
        settimecounting(true);
        setworking(false);
        setresting(true)
        if (Long) {
            setmaintime(props.LongRestTime);

        } else {
            setmaintime(props.shortRestTime);
        }
        audioStopWorking.play();
    }, [settimecounting, setworking, setresting, setmaintime, props.LongRestTime, props.shortRestTime])
    useEffect(() => {
        if (working) document.body.classList.add('working');
        if (resting) document.body.classList.remove('working');
        if (maintime > 0) return;
        if (working && cyclesQtdManager.length > 0) {
            configurerest(false);
            cyclesQtdManager.pop();
        } else if (working && cyclesQtdManager.length <= 0) {
            configurerest(false);
            setCyclesQtdManager(new Array(props.cycles - 1).fill(true),)
            setcompletedCycles(completedCycles + 1);
        }
        if (working) setnumberOfPomodoros(numberOfPomodoros + 1);
        if (resting) configurework();
    }, [working, resting, maintime, cyclesQtdManager, numberOfPomodoros, completedCycles, configurerest, setCyclesQtdManager, props.cycles])
    return (
        <Box className='pomodoro'>
            <Typography component="h2"> você está:{working ? 'trabalhando' : 'descansando'}</Typography >
            <Timer maintime={maintime} />

            <Box className='controls'>
                <Button onClick={() => { configurework() }}>{"work"}</Button>
                <Button onClick={() => configurerest(false)}>{"rest"}</Button>
                <Button
                    onClick={() => settimecounting(!timecounting)}
                >{timecounting ? 'pause' : 'play'}</Button>
                className={!working && !resting ? 'hidden' : ''}

            </Box>
            <Box className='details'>
                <p> ciclos concluidos: {completedCycles}</p>
                <p> Horas trabalhadas:{secondsToTime(fullWorkingTime)}</p>
                <p> Pomodoros concluídos:{numberOfPomodoros}</p>
            </Box>
        </Box>


    )

}

