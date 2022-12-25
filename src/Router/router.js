import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Error/ErrorPage";
import Main from "../Layout/Main";
import AllProduct from "../Pages/Collections/AllProduct/AllProduct";
import CetagoryDaseData from "../Pages/Collections/Cetagory Base Data/CetagoryDaseData";
import DetailsProduct from "../Pages/Collections/Details Data/DetailsProduct";
import Home from "../Pages/Home/Home"
import PrivetRoute from "../Pages/PrivetRoute/PrivetRoute";
import LogIn from "../Pages/Registrations/LogIn";
import SingUp from "../Pages/Registrations/SingUp";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/allProduct',
                element: <AllProduct />
            },
            {
                path: '/view_Product/:id',
                element: <DetailsProduct />
            },
            {
                path: '/cetagory-data/:id',
                element: <CetagoryDaseData />,
                loader: ({ params }) => fetch(`http://localhost:5000/cetagory/${params.id}`)
            },
            {
                path: '/singup',
                element: <SingUp />
            },
            {
                path: '/login',
                element: <LogIn />
            }
        ]
    }
])

export default router;