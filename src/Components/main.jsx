import ResturantCard from "./resturantCard";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import resList from "./Utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { EMPTY_STRING } from "./Utils/constant";
import {Link} from "react-router-dom";
const Main = () => {
  const [listOfResturant, setlistOfResturant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState(EMPTY_STRING);

  //Whenever state variable update, react trigger a reconciliation cycle(re-renders the component)
  //basic behaviour of useeffect is to be called after every render
  //If no dependeny array ==> After every render of the component useEffect will be called
  // if dependency array empty [] ==> useEffect called on initial render (just once)
  //if something pass as dependency ==> useeEffect called every time dependency value is changes

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.568093&lng=77.4344775&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setlistOfResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfResturant?.length === 0 ? (
    <Shimmer />
  ) : (
    <Grid>
      <Grid display={"flex"} container marginTop={1} columnGap={1}>
        <Grid item>
          {" "}
          <TextField
            id="outlined-basic"
            label="search"
            variant="outlined"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            onClick={() => {
              const filteredRestaurant = listOfResturant.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </Button>
        </Grid>
        <Grid>
          <Button
            variant="outlined"
            onClick={() => {
              {
                setSearchText(EMPTY_STRING);
              }
            }}
          >
            Reset
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            onClick={() => {
              const filteredRestaurant = listOfResturant.filter(
                (res) => res?.info?.avgRating === 4
              );
              setFilteredRestaurant(filteredRestaurant);
              setSearchText(searchText);
              console.log(filteredRestaurant, "filteredRestaurant");
              console.log(listOfResturant, "listOfRes");
            }}
          >
            TopRated Resturant
          </Button>
        </Grid>
      </Grid>
      <Grid container display="flex" justifyContent={"center"}>
        {filteredRestaurant &&
          filteredRestaurant.map((restaurant) => (
          <Link key={restaurant?.info?.id} to = {"/resturants/"+restaurant?.info?.id}> <ResturantCard  resData={restaurant} /></Link> 
          ))}
        <Grid></Grid>
        {/* <ResturantCard resData ={resList[0]} /> */}
      </Grid>
    </Grid>
  );
};

export default Main;
