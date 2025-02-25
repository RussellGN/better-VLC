import { FolderOpen, Home, Settings, Tv2 } from "lucide-react";
import { NavLink, Outlet } from "react-router";
import { Button } from "../ui/button";
import DiscoverBtn from "./DiscoverBtn";

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

            <Button size="sm" asChild>
               <NavLink className="_navlink" to="/watch/c:path/to/random/file">
                  watch
                  <Tv2 />
               </NavLink>
            </Button>

            <Button size="sm" asChild>
               <NavLink className="_navlink" to="/folder/c:path/to/random/file">
                  folder
                  <FolderOpen />
               </NavLink>
            </Button>

            <Button size="sm" asChild>
               <NavLink className="_navlink" to="/settings">
                  settings
                  <Settings />
               </NavLink>
            </Button>

            <div className="ml-auto mt-3 mr-3">
               <DiscoverBtn />
            </div>
         </nav>
         <Outlet />
      </div>
   );
}
