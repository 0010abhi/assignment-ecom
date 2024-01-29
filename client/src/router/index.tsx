import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home";
import AdminOrders from "../pages/Admin/Orders";
import AdminCoupons from "../pages/Admin/Coupons";
import Cart from "../pages/Cart";
import LogIn from "../pages/LogIn";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: '/login',
        element: <LogIn />
    },
    {
        path: "/products",
        element: <Home />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/orders",
        element: <AdminOrders />,
    },
    {
        path: "/coupons",
        element: <AdminCoupons />,
    },
]);

export default router;