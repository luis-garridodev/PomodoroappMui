import React, { Fragment } from 'react'
import { secondsToMinutes } from '../utils/seconds-to-minutes';
import Box from "@mui/material/Box"
import { Grid, Paper, styled, Typography } from '@mui/material';
import { color } from '@mui/system';
import { red } from '@mui/material/colors';

import { useOptions } from '../hooks/use-options';

interface props {
       maintime: number
       working: boolean
}


export function Timer(props: props): JSX.Element {
       const recovery=localStorage.getItem('maintime')
       return (
              <Grid container margin={0} >
                     <Grid item xs={12} sx={{textAlign:'center'}}>
                                   <Typography variant='h3' component="h2" >
                                          <Typography variant='inherit' sx={{ display: 'inline' }}>Você está: </Typography>
                                          <Typography variant='inherit' sx={{ color: '#f5f5f5', display: 'inline' }}>
                                                 {props.working ? 'Trabalhando' : 'Descansando'}
                                          </Typography>
                                   </Typography >

                                   
                                   <Typography variant='h2' component="h2"  > {secondsToMinutes(props.maintime)} </Typography >
                     </Grid>
              </Grid>
       )

}