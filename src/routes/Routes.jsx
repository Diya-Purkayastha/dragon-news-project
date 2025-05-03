import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../page/Home";
import CategoryNews from "../page/CategoryNews";

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
            element: <p>auth layout</p>
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