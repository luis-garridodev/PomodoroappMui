import { Box} from "@mui/material";
import React, { Children, createContext, useCallback, useMemo, useState } from "react";
import { useContext } from 'react';
import { optionsContext } from "../contexts/optioncontext";

export function useOptions(){
    const optionsCtx = useContext(optionsContext);

    if (!optionsCtx) throw new Error('Error loading options context ' + optionsCtx);

    return optionsCtx;
}

