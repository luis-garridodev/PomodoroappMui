import React from 'react'
import { secondsToMinutes } from '../utils/seconds-to-minutes';
import Box from "@mui/material/Box"



interface props{
maintime:number
}
export function Timer(props:props):JSX.Element{
    
       return <Box className='timer'>{secondsToMinutes(props.maintime)}</Box>;
    
}