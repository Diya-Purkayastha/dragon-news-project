import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../page/Home";
import CategoryNews from "../page/CategoryNews";
import Login from "../page/Login";
import Register from "../page/Register";
import AuthLayout from "../layouts/AuthLayout";

export const router = createBrowserRouter(
    [
        {
            path:'/',
            element: <HomeLayout></HomeLayout>,
            children:[
                {
                    path: '',
                    element:<Home></Home>
                },
                {
                    path:'/category/:id',
                    Component: CategoryNews,
                    loader: ()=> fetch('/news.json')
                }
            ]
        },
        {
            path:'/auth',
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path:'/auth/login',
                    element:<Login></Login>
                },
                {
                    path:'/auth/register',
                    element:<Register></Register>
                }
            ]
        },
        {
            path:'/news',
            element: <p>news layout</p>
        },
        {
            path:'/*',
            element: <p>error404</p>
        },
    
    ]
)