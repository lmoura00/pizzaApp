import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/home";
import Detail from "../Pages/detail";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:'/detail/:id',
        element: <Detail/>
    }
])

const Routes = () =>{
    return(
        <RouterProvider router={routes}/>
    )
}

export default Routes