import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import NotFound from "../pages/NotFound/NotFound";
import Chef_Recipes from "../pages/Chef_Recipes/Chef_Recipes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/chefs')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/recipe/:id",
                element: <Chef_Recipes></Chef_Recipes>
            },

        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }
])



export default router;