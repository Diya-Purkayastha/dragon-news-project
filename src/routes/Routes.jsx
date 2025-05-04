import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../page/Home";
import CategoryNews from "../page/CategoryNews";
import Login from "../page/Login";
import Register from "../page/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../page/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../page/Loading";

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
                    hydrateFallbackElement:<Loading></Loading>,
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
            path:'/news-details/:id',
            element: (
                <PrivateRoute>
                    <NewsDetails></NewsDetails>
                </PrivateRoute>
            ),
            loader: ()=> fetch('/news.json'),
            hydrateFallbackElement:<Loading></Loading>
        },
        {
            path:'/*',
            element: <p>error404</p>
        },
    
    ]
)