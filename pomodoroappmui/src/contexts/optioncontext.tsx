import { Box, Theme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { parse } from "path";
import React, { Children, createContext, useCallback, useMemo, useState } from "react";
import { useContext } from 'react';

interface ISendOptions {
    shortRestTime: number;
    longRestTime: number;
    cycles: number;
    working: number;
    pomodorotimer:number;
   
 
}
interface ISendOptionsContext {
    options: ISendOptions,
    setOptions: (newOptions: Partial<ISendOptions>) => void;
    saveoptions:(newOptions:Partial<ISendOptions>)=>void
    recoveryoptions:()=>void
    // setDoubleWorkingHours: () => void;
}


const defaultOptions: ISendOptions = {
    cycles: 3,
    longRestTime: 30,
    shortRestTime: 10,
    working: 30,
    pomodorotimer:30,
   
   
}


export const optionsContext = createContext<ISendOptionsContext | null>(null); // optionsValues, setOptionsValue

export const OptionsContextProvider = (props: { children: React.ReactNode }) => {
    const [options,setOptions] = React.useState(defaultOptions);
   
    // LEIA LUIS!!!
    // LEIA LUIS!!!
    // LEIA LUIS!!!
    // vai concatenar o valor atual das options com a outras propriedades 
    // que vc passar pelo parametro "partialOptions"
    const setOptionsFunc = (newOptions: Partial<ISendOptions>) => {
        setOptions((oldOptions) => {
            return {...oldOptions, ...newOptions} 
           
            
        });
    }
    const keepOptionsLocal=(newOptions:Partial<ISendOptionsContext>)=>{
       setOptions((options)=>{
        return{...options,...newOptions}
       })
    }
    // quando for setar esse state, tem que passar uma ref do resto do objeto,
    // por exemplo
    // com as ultimas atualizações, como: setOptions((oldOptions) => {...oldOptions,cycles: 5 }) 
    // lembrar de criar um hook para acessar o valoe nesse contexto!
    const setWorking = (workingHours: number) => {
        setOptionsFunc({working: workingHours})
       
 
    }
    const setResting=(resting:number)=>{
        setOptionsFunc({shortRestTime:resting})
    }
    // const setDoubleCycles = () => {
    //   setOptions((oldOptions) =>{
    //     return{...oldOptions,cycles:oldOptions.cycles*2}
    //   })
    // }
    const setDoubleWorkingHours=()=>{
        setOptions((oldOptions) => {
            return {...oldOptions,working: oldOptions.working*2,}
        })
    }
    
const savework=()=>{
 
       
}
function saveoptions(newOptions:Partial<ISendOptions>){
    localStorage.setItem('options',JSON.stringify({...options,...newOptions}))
}
function recoveryoptions(){
    
   const recovery= localStorage.getItem('options')
   
   if(!recovery) return;
   setOptionsFunc(JSON.parse(recovery))
  
}
function receiveoptions(){
    if(localStorage!==undefined){
        localStorage.getItem('options')
    }
}


    
    return (
        <optionsContext.Provider value={{options,setOptions:setOptionsFunc,saveoptions,recoveryoptions}}>
            {props.children}
        </optionsContext.Provider>
    )
}






//export const optionsContext = createContext<ISendOptionsContext>(DefaultOptions);

