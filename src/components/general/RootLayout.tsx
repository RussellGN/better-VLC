import { Home } from "lucide-react";
import { NavLink, Outlet } from "react-router";
import { Button } from "../ui/button";
import { Toaster } from "../ui/sonner";

export default function RootLayout() {
   return (
      <div className="p-2">
         <nav className="border-b-2 border-dark-light pb-2 flex capitalize items-center gap-2">
            <Button size="sm" asChild>
               <NavLink className="_navlink" to="/">
                  home
                  <Home />
               </NavLink>
            </Button>
         </nav>

         <Outlet />
         <Toaster />
      </div>
   );
}
