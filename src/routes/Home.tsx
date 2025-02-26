import Section from "@/components/general/Section";
import VideoThumbnail from "@/components/general/VideoThumbnail";
import { videos } from "@/lib/sampleData";
import { Play } from "lucide-react";

export default function Home() {
   return (
      <div>
         <Section icon={Play} title="All media">
            <div className="flex items-center flex-wrap gap-10 max-h-[50vh] overflow-y-auto">
               {videos.splice(0, 6).map((vid) => (
                  <VideoThumbnail video={vid} key={vid.id} />
               ))}
            </div>
         </Section>
      </div>
   );
}
