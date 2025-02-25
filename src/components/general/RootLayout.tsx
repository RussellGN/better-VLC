import { Home, Settings, Tv2 } from "lucide-react";
import { NavLink, Outlet } from "react-router";
import { Button } from "../ui/button";

export default function RootLayout() {
   return (
      <div className="p-2">
         <nav className="border-b border-[#393939] pb-2 mb-2 flex capitalize items-center gap-2">
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
               <NavLink className="_navlink" to="/settings">
                  settings
                  <Settings />
               </NavLink>
            </Button>
         </nav>
         <Outlet />
      </div>
   );
}
