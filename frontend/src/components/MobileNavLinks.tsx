import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
    const { logout } = useAuth0();
    return(
        <>
        <Link to="/user-profile" className="flex text-white font-bold items-center bg-gray-800 hover:text-pink-600">
            User Profile
        </Link>
        <Button onClick={() => logout()} className="flex items-center px-3 bg-pink-600 text-black font-bold hover:bg-white">
            Log Out
        </Button>
        </>
    )
}


export default MobileNavLinks;