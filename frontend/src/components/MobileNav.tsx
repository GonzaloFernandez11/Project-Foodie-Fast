import { CircleUserRound, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();
    return(
        <Sheet>
            <SheetTrigger>
                <Menu className="text-pink-600" />
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    { isAuthenticated ? (
                        <span className="flex items-center fotn-bold gap-2">
                            <CircleUserRound className="rxt-pink-600"/>
                            {user?.name}
                        </span>
                    ) : (
                        <span> Welcome to FoodieFast.com! </span>
                    )}
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex"> 
                    {isAuthenticated ? ( 
                      <MobileNavLinks /> 
                    ) : (
                      <Button className="flex-1 font-bold bg-pink-600">Log In</Button> 
                    )}
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;