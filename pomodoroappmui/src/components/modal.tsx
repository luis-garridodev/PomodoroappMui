
import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, Modal, TextField, Typography } from "@mui/material";
import { Settings as SettingsIcon, CloseRounded, PropaneSharp, TextFieldsRounded } from '@mui/icons-material';
import { ReactNode, useState, useRef, useEffect } from "react";
import { useOptions } from "../hooks/use-options";
import { optionsContext, OptionsContextProvider } from "../contexts/optioncontext";
import { exitCode } from "process";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
interface IProps {
    open?: boolean;
    handleOpen?: () => void;
    handleClose?: () => void;
}


export function OnModal(props: IProps) {
    const {options,setOptions,saveoptions} = useOptions();
    const [openState, setOpenState] = useState(false);
    const workingInput = useRef(options.working);
    const restinput = useRef(options.shortRestTime);
    const handleClose = () => {
        setOpenState(false);
    };

function translateHours(){
    const translateWorking=(workingInput.current)
    const translateResting=(restinput.current)
    
    const newOptions = {working:translateWorking,shortRestTime:translateResting};
   
    setOptions(newOptions)
    saveoptions(newOptions);  
    
    
     setOpenState(false)
       
     
    
   
}

    return (
        <div>
            <Button onClick={() => setOpenState(true)} color="info" >< SettingsIcon /></Button>
          
            <Modal
                open={openState}
            // onClose={props.handleClose}
            >
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Dialog onClose={() => handleClose()} open={(openState)}>
                            <DialogTitle>opções</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    digite o numero de horas de trabalho/descanso
                                </DialogContentText>
                                <TextField
                                    defaultValue={options.working}
                                    onChange={(event) => workingInput.current = parseInt(event.target.value)}
                                   
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="horas de trabalho"
                                    type="number"
                                    fullWidth
                                    variant="standard"
                                   
                                 
                                />

                       
                                 
                                <TextField
                                    defaultValue={options.shortRestTime}
                                    onChange={(event) => restinput.current = parseInt(event.target.value)}
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="horas de descanso"
                                    type="number"
                                    fullWidth
                                  variant="standard"
                                   
                                />
                                
                                 <Button variant="contained" onClick={() => translateHours()}>salvar</Button>
                            </DialogContent>
                        </Dialog>
                        <Button onClick={() => setOpenState(false)} sx={{ display: 'inline-block', p: 1, ":hover": { cursor: 'pointer' } }} >
                            <CloseRounded />

                        </Button>
                    </Box>
                   
               
            </Modal>
        </div>


    )
}