import React from 'react';
import { ThemeContext } from '../contexts/themecontext'

export function useThemeHook(){
return React.useContext(ThemeContext)
}


