import React from 'react'
import Card from "@mui/material/Card";
import Grid from '@mui/material/Grid';
import { Height } from '@material-ui/icons';
function Shimmer() {

    const styleCard = {
        width: "250px",
        Height:"400px",
        margin: "10px",
        transition: "width 3s",
        background:'#f0f0f0'
      };

      
  return  (
    <Grid display={ 'flex'}>
        <Grid container
        >
               <Card style={styleCard}>cart </Card>
               <Card style={styleCard}>cart </Card>
               <Card style={styleCard}>cart </Card>
               <Card style={styleCard}>cart </Card>
               <Card style={styleCard}>cart </Card>
               <Card style={styleCard}>cart </Card>
               <Card style={styleCard}>cart </Card>
               <Card style={styleCard}>cart </Card>
               <Card style={styleCard}>cart </Card>
               <Card style={styleCard}>cart </Card>
        </Grid>
    </Grid>
  )
}

export default Shimmer;