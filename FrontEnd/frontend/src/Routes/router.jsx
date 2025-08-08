import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/home";
import Layout from "../Components/layout";
import Book from "../Pages/books";
import Electronic from "../Pages/electronic";
import Fashion from "../Pages/fashion";
import Vehicle from "../Pages/vehicles";
import Cart from "../Pages/cart";
import LogIn from "../Pages/logIn";
import Signup from "../Pages/signup";
import ProductDetail from "../Product/detailed/productdetails";
import BookProductDetail from "../Product/detailed/bookdetail";
import ElectonicProductDetail from "../Product/detailed/electronicdetail"
import VehicleProductDetail from "../Product/detailed/vehicledetail";
import FashionProductDetail from "../Product/detailed/fashiondetail";


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
                    path: "/signup",
                    element: <Signup/>
                },
                {
                    path: "/logIn",
                    element: <LogIn/>
                },
                {
                    path: "/cart",
                    element: <Cart/>
                },
                {
                    path: "/product/:id",
                    element: <ProductDetail />
                },
                {
                    path: "/book/:id",
                    element: <BookProductDetail />
            
                },
                {
                    path: "/electronic/:id",
                    element: <ElectonicProductDetail />            
                },
                {
                    path: "/vehicle/:id",
                    element: <VehicleProductDetail />            
                },
                {
                    path: "/fashion/:id",
                    element: <FashionProductDetail />            
                },                                
            ]
        }
    ]
);

export default router;