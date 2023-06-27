// import { Box, Theme } from "@mui/material";
// import { ThemeProvider } from "@mui/system";
// import React, { Children, createContext, useCallback, useMemo, useState } from "react";
// import { useContext } from 'react';
// import{LightTheme,DarkTheme} from "../themes"

// import { ThemeContext } from '../contexts/themecontext'

// export function useThemeChange(){
    
//     return React.useContext(ThemeContext)
//     }

//  interface IChangeContextData{
//     toggleTheme: ()=>void;
//    theme:Theme
// }   
// export const ChangeContext=React.createContext({}as IChangeContextData);
// interface IAppThemeProviderProps{
//     children:React.ReactNode
// }

// export default function MyApp() {
//   const [theme, setTheme] = useState('light');
//   return (
//     <ThemeContext.Provider  value={theme}>
     
//       <label>
//         <input
//           type="checkbox"
//           checked={theme === 'dark'}
//           onChange={(e) => {
//             setTheme(e.target.checked ? 'dark' : 'light')
//           }}
//         />
//         Use dark mode
//       </label>
//     </ThemeContext.Provider>
//   )
// }
export {};