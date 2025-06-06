import {FC} from "react";
import {Navigate,Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import { RootState } from "../Store/Store";

const ProtectedRoutes: FC = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    return user ? <Outlet/> : <Navigate to = "/login" replace/>;
};

export default ProtectedRoutes;