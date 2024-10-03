import { Avatar } from "@/components/ui/avatar"
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import ThemeToggler from "./ThemeToggler"

export const Navbar = () => {
    return (
        <div className='bg-primary dark:bg-slate-700 text-white py-1 px-3 flex justify-between items-center h-12'>
            <Link href='/'>
                <div className="text-2xl font-bold bg-slate-600 text-white rounded-full h-10 w-10 flex items-center justify-center">
                    D
                </div>
            </Link>
            <div className="flex items-center space-x-2">
                <ThemeToggler />
                <DropdownMenu>
                    <DropdownMenuTrigger className="focus:outline-none">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src='https://github.com/shadcn.png' alt="@shadcn" />
                            <AvatarFallback className="">Bt</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href='/profile'>Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href='/auth'>Logout</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

