import { sampleVideos } from "@/lib/sampleData";
import { TvMinimalPlay } from "lucide-react";
import VideoList from "./VideoList";

export default function Home() {
   return (
      <div>
         <VideoList
            videos={sampleVideos}
            icon={TvMinimalPlay}
            contentClassName=" max-h-[75vh] overflow-y-auto"
            title="All media"
         />
      </div>
   );
}
