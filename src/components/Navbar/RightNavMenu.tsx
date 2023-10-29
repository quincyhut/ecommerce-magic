import { Avatar,AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HiShoppingBag } from "react-icons/hi";
import { BiPurchaseTag } from "react-icons/bi";
import { LogOut, Settings, User} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const RightNavMenu = () => {
    return (
        <div className="flex-between gap-10 ml-10">
            <HiShoppingBag className="text-3xl cursor-pointer hover:opacity-5" />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-3 w-[180px] mr-5 md:mr-20 mt-2 bg-white">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <User className="mr-3 h-4 w-4" />
                            <span>My Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <BiPurchaseTag className="mr-3 h-4 w-4" />
                            <span>My Orders</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className="mr-3 h-4 w-4" />
                            <span>Settings</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <LogOut className="mr-3 h-4 w-4" />
                        <span>Log out</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default RightNavMenu