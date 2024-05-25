import React from "react";
import ReactDOM from "react-dom/client"
import Main from './main';
import {createBrowserRouter, RouterProvider,Outlet,Link} from "react-router-dom";
import Header from "./header";
import About from "./About";
import ContactUs from "./ContactUs";
import ErrorPage from "./ErrorPage";
import ResturantMenu from "./ResturantMenu";

// React.createElement => Object => HTMLElement(render)

//jsx (transpiled before it reaches the js) - babel
//JSX => React.createElement => JS Object => HTMLElement(render)
// const jsxheading = <h1 id = 'heading'>hello jsx</h1>
//component



const AppLayout = () => {
    return (<>
    <Header />
    <Outlet />
    </>)
}

const appRouter =  createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[{
            path:"/about",
            element:<About />,
        },
        {
            path:"/",
            element:<Main />,
        },
        {
            path:"/contact",
            element:<ContactUs />,
        },
        {
            path:"/resturants/:resId",
            element:<ResturantMenu />,
        },
    ],
        errorElement: <ErrorPage />,
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);



