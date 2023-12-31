import { Typography,Button, Dialog, List, ListItem, ListItemButton, ListItemText, TextField, DialogTitle, DialogActions } from "@mui/material";
import React, { useState } from "react";
import '../App.css';
export default function SimpleDialogDemo() {
    const [val,setVal]=useState(false);
    function handle(){
            setVal(true);
    }
    function handleclose(){
            setVal(false);
    }
  const arrays=['helo','hi'];
    return (
      <div >
        <h1>DIALOG BOX USING MUI </h1>
        <Button variant="contained" onClick={handle}>open</Button>
        <Dialog open={val} >
            <div >

            <DialogTitle className='hel' >Login</DialogTitle> 
            <List>
                
                <ListItem>
                    <TextField variant='standard' fullWidth label='Username' ></TextField>
                </ListItem>
                <ListItem>
                    <TextField variant='standard' fullWidth label='Password'></TextField>
                </ListItem>

                
            </List>
            <DialogActions>
                <Button variant='contained' onClick={handleclose}>CANCEL</Button>
                <Button variant='contained' onClick={handleclose}>LOGIN</Button>
            </DialogActions>
            </div>
        </Dialog>
      </div>
    );
}