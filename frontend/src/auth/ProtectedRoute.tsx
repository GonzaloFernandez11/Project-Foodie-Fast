import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    // Necesitamos la info de Auth0.
    const { isAuthenticated } = useAuth0();  

    // Necesitamos verificar si el usuario está auth o no.
    return isAuthenticated ? (<Outlet />) : (<Navigate to='/' replace />); 
    // Si está auth mostramos todos los componentes 'childrens', sino lo mandamos al Home-Page.

}

export default ProtectedRoute;