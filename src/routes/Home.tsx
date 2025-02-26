import { TvMinimalPlay } from "lucide-react";
import VideoList from "./VideoList";
import useVideos from "@/hooks/useVideos";

export default function Home() {
   const { videos, isLoading, error, refresh } = useVideos();

   return (
      <div>
         <VideoList
            videos={videos}
            isLoading={isLoading}
            error={error}
            icon={TvMinimalPlay}
            contentClassName=" max-h-[75vh] overflow-y-auto"
            title="All media"
            refresh={refresh}
         />
      </div>
   );
}
