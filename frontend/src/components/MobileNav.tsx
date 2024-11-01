import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";

const MobileNav = () => {
    return(
        <Sheet>
            <SheetTrigger>
                <Menu className="text-pink-600" />
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    <span> Welcome to FoodieFast.com! </span>
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex"> {/* The parent will be a flex box */}
                    <Button className="flex-1 font-bold bg-pink-600">Log In</Button> {/* So i can apply flex-1 in the child */}
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;