import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/home";
import Layout from "../Components/layout";
import Book from "../Pages/books";
import Electronic from "../Pages/electronic";
import Fashion from "../Pages/fashion";
import Vehicle from "../Pages/vehicles";
import Cart from "../Pages/cart";
import LogIn from "../Pages/logIn";
import Signin from "../Pages/signin";



const router = createBrowserRouter (
    [
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "/books",
                    element: <Book/>
                },
                {
                    path: "/electronic",
                    element: <Electronic/>
                },
                {
                    path: "/fashion",
                    element: <Fashion/>
                },
                {
                    path: "/vehicles",
                    element: <Vehicle/>
                },
                {
                    path: "/signin",
                    element: <Signin/>
                },
                {
                    path: "/logIn",
                    element: <LogIn/>
                },
                {
                    path: "/cart",
                    element: <Cart/>
                },
            ]
        }
    ]
);

export default router;