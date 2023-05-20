import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../components/Home/Home";
import AllToys from "../components/Toys/AllToys";
import MyToys from "../components/Toys/MyToys";
import AddAToy from "../components/Toys/AddAToy";
import Blogs from "../components/Blogs";
import PrivateRoute from "./PrivateRoute";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import SingleToyDetails from "../components/Toys/SingleToyDetails";
import UpdateAToy from "../components/Toys/UpdateAToy";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'all-toys',
                element: <AllToys/>
            },
            {
                path: 'my-toys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: 'add-a-toy',
                element: <AddAToy/>
            },
            {
                path: 'blogs',
                element: <Blogs/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'sign-up',
                element: <SignUp/>
            },
            {
                path: 'toy/:id',
                element: <PrivateRoute><SingleToyDetails /></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:3000/toy/${params.id}`)
            },
            {
                path: 'update-toy/:id',
                element: <PrivateRoute><UpdateAToy /></PrivateRoute>,
                
            }
        ]
    }
])