import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route 
            path='/' 
            element = {
            <Layout showHero>
                <HomePage />
            </Layout>
            } 
            />
            <Route path="/auth-callback" element={<AuthCallbackPage />} />
            <Route path='/user-profile' element={<Layout><UserProfilePage/></Layout>} />
            <Route path='*' element = { <Navigate to='/' /> }/>
        </Routes>
    );
};

export default AppRoutes;


// Construir una página 404 cuando la ruta es incorrecta con un link que nos devuelva a HomePage.