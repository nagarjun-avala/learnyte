import { useSelector } from "react-redux";
import { Outlet, useLocation, Navigate } from "react-router-dom";

const useAuth = () => {
    const { auth } = useSelector((state) => state);
    return auth && (auth?.token ? true : false) && (auth?.user?._id ? true : false)
}


const ProtectedRoute = () => {
    const isAuth = useAuth();
    const location = useLocation();

    // console.log("In protected route : ", auth)

    return (isAuth)
        ? <Outlet />
        : <Navigate to="/login" state={{ from: location }} replace />
};

export default ProtectedRoute;
