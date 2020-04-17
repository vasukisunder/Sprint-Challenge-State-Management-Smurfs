import React, { useContext } from 'react';
import axios from 'axios';
import 'typeface-roboto';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { SmurfContext } from '../contexts';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0",
        margin: "0",
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


export default function Form() {

    const classes = useStyles();
    const {smurf, handleChange, handleSubmit} = useContext(SmurfContext);
    

    return (
        <form id= "form" className={classes.root} noValidate autoComplete="off">
           
           <Typography gutterBottom variant="h5" component="h2">
                    Add a new smurf:          </Typography>
                <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    type="text"
                    name="name"
                    value={smurf.name}
                    onChange={handleChange} />
    
                <TextField
                    id="outlined-basic"
                    label="Age"
                    variant="outlined"
                    type="text"
                    name="age"
                    value={smurf.age}
                    onChange={handleChange} />
    
                <TextField
                    id="outlined-basic"
                    label="Height"
                    variant="outlined"
                    type="text"
                    name="height"
                    value={smurf.height}
                    onChange={handleChange} />

           
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}>
                Submit
            </Button>
        </form>
    );

}