import { type Folder } from "@/lib/types";
import { Link } from "react-router";

type propTypes = {
   folder: Folder;
};

export default function Folder({ folder }: propTypes) {
   return (
      <Link
         title={folder.title}
         to={`/folder/${folder.src}?title=${folder.title}`}
         className="flex flex-col gap-3 w-[5rem] justify-center transition-all items-center hover:scale-105"
      >
         <img src="/folder.svg" className="w-full" />
         <div className="text-center break-words w-full line-clamp-2">{folder.title}</div>
      </Link>
   );
}
