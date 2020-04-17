import React, {useContext} from 'react';
import {SmurfContext} from '../contexts';
import { makeStyles } from '@material-ui/core/styles';

import Smurf from './Smurf';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
}));

export default function Smurfs() {

    const {smurfs} = useContext(SmurfContext);
    const classes = useStyles();
console.log("eff", smurfs )

    return (
             <Grid id ="grid" container spacing = {3}>
                  {smurfs.map(smurf => (
                      <Smurf 
                          name = {smurf.name}
                          age = {smurf.age}
                          height = {smurf.height}
                          id = {smurf.id} />
                  ))}
             </Grid>
  
            
    )
}