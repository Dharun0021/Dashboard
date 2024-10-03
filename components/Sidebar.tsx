import {Command,CommandDialog,CommandEmpty,CommandGroup,CommandInput,CommandItem,CommandList,CommandSeparator,CommandShortcut,} from "@/components/ui/command"
import Link from "next/link"
import { LayoutDashboard,Newspaper,Folder,CreditCard,Settings,User} from "lucide-react"
export const Sidebar = () => {
  return (
    <Command className="bg-secondary rounded-none">
    <CommandInput placeholder="Type a command" />
    <CommandList>
      <CommandGroup heading="Suggestions">
        <CommandItem>
            <LayoutDashboard className="mr-2 h-4 w-4"/>
            <Link href='/'>Dasborad</Link>
        </CommandItem>
        <CommandItem>
        <Newspaper className="mr-2 h-4 w-4"/>
        <Link href='/posts'>Post</Link>
        </CommandItem>
        <CommandItem>
            
        <Folder className="mr-2 h-4 w-4"/>
        <Link href='/categories'>Categories</Link>
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Settings">
        
        <CommandItem>
            <User className="mr-2 h-4 w-4"/>
            <Link href='/profile'>Profile</Link>
        </CommandItem>
        <CommandItem>
        <CreditCard className="mr-2 h-4 w-4"/>
        <Link href='/profile'>Creditcard</Link>
        </CommandItem>

        <CommandItem>
        <Settings className="mr-2 h-4 w-4"/>
        <Link href='/profile'>Settings</Link>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
  
  )
}
