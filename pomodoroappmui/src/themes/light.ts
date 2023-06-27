import { Button, createTheme } from "@mui/material"
import { cyan,yellow,blue,green,red,grey,teal } from "@mui/material/colors"
import { responsiveFontSizes } from '@mui/material/styles';



export const LightTheme=createTheme({
    palette:{
        primary:{
            main:'#D02F97',
            dark:'#52b202',
            light:'#97D02F',
            contrastText:'#f5f5f5',
           
        },
     
        secondary:{
            main:'#2f97d0',
            dark:'#52b202',
            light:'#91ff35',
            contrastText:'#ffffff',
            
        },
        background:{
            paper:'#e0e0e0',
            default:'#f7f6f3'
        },
 info:{
    main:'#212121'
 }
    },
    typography:{
        
    button:{
        fontStyle:'italic'
    }
 
},


})