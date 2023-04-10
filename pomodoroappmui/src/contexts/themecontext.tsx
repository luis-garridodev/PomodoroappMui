import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import React, { Children, createContext, useCallback, useMemo, useState } from "react";
import{ClockActive,ClockPause} from "../themes"


interface IThemeContextData{
    themeName:"clockactive"|"clockpause";
    toggleTheme: ()=>void;
}
const ThemeContext=createContext({}as IThemeContextData);
interface IAppThemeProviderProps{
    children:React.ReactNode
}
 export const APPThemeProvider:React.FC<IAppThemeProviderProps>=({children})=>{
         const [themeName,setThemeName]=useState<"clockactive"|"clockpause">("clockactive")
    const toggleTheme=useCallback(()=>{
       setThemeName(oldThemeName=>oldThemeName==="clockactive"? "clockpause" : "clockactive");
    },[])
    const theme=useMemo(()=>{
        if(themeName==="clockactive"){
            return ClockActive
        }
        return ClockPause
        

    },[themeName])
    return(
        <ThemeContext.Provider value={{themeName,toggleTheme}}>
           <ThemeProvider theme={theme}> 
     <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default} >
        
       {children} 
        </Box>
       </ThemeProvider> 
       </ThemeContext.Provider>
    )
        }