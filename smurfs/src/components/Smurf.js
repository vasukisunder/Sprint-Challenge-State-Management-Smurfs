import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  
}));



export default function Smurf (props) {
    const classes = useStyles();
    console.log("fesf", props);

    return (
           <Grid item xs={3}>
               

                <Card id = "card" className = {classes.root}>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {props.name}          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.name} is {props.age} years old and has a height of {props.height}{props.id === 0 ? "" : "cm"}.
          </Typography>
                    </CardContent>
                </Card>


           </Grid>
    )
}