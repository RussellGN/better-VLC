import { FolderSearch } from "lucide-react";
import { Button } from "../ui/button";

export default function DiscoverBtn() {
   return (
      <Button variant="primary">
         Discover New Media
         <FolderSearch />
      </Button>
   );
}
