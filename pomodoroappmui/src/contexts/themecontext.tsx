import { Box, Theme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import React, { Children, createContext, useCallback, useMemo, useState } from "react";
import { useContext } from 'react';
import{LightTheme,DarkTheme} from "../themes"


interface IThemeContextData{
    toggleTheme: ()=>void;
   theme:Theme
}
export const ThemeContext=React.createContext({}as IThemeContextData);
interface IAppThemeProviderProps{
    children:React.ReactNode
}

 export const APPThemeProvider:React.FC<IAppThemeProviderProps>=({children})=>{
         const [themeName,setThemeName]=useState<"lighttheme"|"darktheme">("lighttheme")
    const toggleTheme=useCallback(()=>{
       setThemeName(oldThemeName=>oldThemeName==="lighttheme"? "darktheme" : "lighttheme");
    },[])
    const theme=useMemo(()=>{
        if(themeName==="lighttheme"){
            return LightTheme;
        }
        return DarkTheme;
        

    },[themeName])
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
           <ThemeProvider theme={theme}> 
       {children} 
       </ThemeProvider> 
       </ThemeContext.Provider>
    )
        }