import { createTheme } from "@mui/material"
import { blue,green } from "@mui/material/colors"
export const ClockActive=createTheme({
    palette:{
        primary:{
            main:blue[500]
        },
        secondary:{
            main:green['A400']
        },
        background:{
            default:green['A400']
        }

    }
})
