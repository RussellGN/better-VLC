import { Link, Outlet } from "react-router";

export default function RootLayout() {
   return (
      <div>
         <nav className="flex items-center gap-3">
            <Link className="text-secondary-default" to="/">
               home
            </Link>
            <Link className="text-secondary-default" to="/watch/c:path/to/random/file">
               watch
            </Link>
            <Link className="text-secondary-default" to="/settings">
               settings
            </Link>
         </nav>
         <Outlet />
      </div>
   );
}
