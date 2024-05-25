import Grid from "@mui/material/Grid"; 
import Button from '@mui/material/Button';
import { LOGO_URL } from './Utils/constant';
import { useState } from "react";
import {Link} from "react-router-dom";


const Header = () => {

  const[login, setLogin] = useState("Login");

  return (
    <Grid>
      <Grid container
        justifyContent={"space-between"}
        alignItems={"center"}
        style={{
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "black",
        }}
      >
        <Grid>
          <Grid item>
            <img
              src={LOGO_URL}
              style={{ height: 49, widht: 34 }}
            ></img>
          </Grid>
        </Grid>
        <Grid >
          <Grid container  columnGap={1}>
         
          <Grid item><Link to = "/">Home</Link></Grid>
          <Grid item><Link to = "/about">About</Link></Grid>
          <Grid item><Link to = "/contact">Contact</Link></Grid>
          <Grid item><Link to = "/cart">Cart</Link></Grid>
          <Grid item><Link to = "/feedback">Feedback</Link></Grid>
          <Grid item>
          <Button variant = 'contained' onClick = {() => {
          login ===  'Login' ?  setLogin("Logout"): setLogin("Login");
          }}>{login}</Button>
          </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
