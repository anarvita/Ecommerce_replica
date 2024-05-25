import Grid from '@mui/material/Grid';
import {useRouteError} from "react-router-dom";


const ErrorPage = ()=>{
    const err = useRouteError();
    console.log(err);

    return(
        <Grid alignItems={'center'}>
    <Grid>Oops!! something went wrong!!</Grid>
    <Grid>{err.status}:{err.statusText}</Grid>
    </Grid>
    )
}

export default ErrorPage;