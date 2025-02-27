import { Video } from "@/lib/types";
import { Link } from "react-router";
import { Play } from "lucide-react";
import { PLACEHOLDER_IMAGE } from "@/lib/constants";

type propTypes = {
   video: Video;
};

export default function VideoThumbnail({ video }: propTypes) {
   return (
      <Link title={video.title} to={`/watch/${video.src}`} className="block min-w-[6rem] w-[13%] relative _v-thumbnail">
         <img
            src={video.thumbnail || PLACEHOLDER_IMAGE}
            alt={video.title}
            className="block w-full shadow aspect-video bg-dark-light border  rounded-md"
         />
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent transition-all _v-thumbnail-screen" />
         <div className="py-1 px-2 flex items-center justify-between gap-4 absolute bottom-0 left-0 w-full ">
            <div className="text-nowrap text-ellipsis overflow-hidden">{video.title}</div>
            <Play />
         </div>
      </Link>
   );
}
