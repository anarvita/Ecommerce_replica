import React from "react";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import { MENU_API } from "./Utils/constant";

function ResturantMenu(props) {
  const [resInfo, setResInfo] = useState(null);
 const {resId} = useParams();
 console.log("resid",resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.568093&lng=77.4344775&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
    );
    
    const json = await data.json();
    console.log(json, "json");
    setResInfo(json.data);
  };

  if(resInfo === null) return <Shimmer />;
  const {name,avgRating,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
  const{itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[17]?.card?.card;


  return  (
    <>
      <Grid>{name}</Grid>
      <Grid>{avgRating}</Grid>
      <Grid>{cuisines.join(" ,")}</Grid>
      <Grid>{costForTwoMessage}</Grid>
      <Grid >
        <Grid item>Menu</Grid>
        {itemCards.map(item =><Grid key ={item.card.info.id} >{item?.card?.info?.name} -{" Rs."}{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100} </Grid>)}
      </Grid>
    </>
  );
}

export default ResturantMenu;
