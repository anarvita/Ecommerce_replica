import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import { CDN_URL } from "./Utils/constant";

// const ResturantCard = () => {
//     return <Grid style ={{padding:10, margin:10, }}>  <Card sx={{ minWidth: 275 }}>
//          <CardContent></CardContent></Card></Grid>
// }

// export default ResturantCard;

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CDN_URL } from "./Utils/constant";

const styleCard = {
  width: "230px",
  margin: "10px",
  transition: " width 3s",
};

export default function ResturantCard(props) {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <>
      <Card style={styleCard}>
        <CardActionArea>
          <CardMedia
            alt="green iquana"
            component="img"
            // height="140"
            image={CDN_URL + cloudinaryImageId}
            style={{ width: "100%", height: "100%", transition: "auto" }}
          />
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {name}
            </Typography>
            <Typography variant="h5" component="div">
              {cuisines.join(" ")}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {avgRating} Stars
              <br />
              {costForTwo}
              <br />
              {deliveryTime} minutes
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}
