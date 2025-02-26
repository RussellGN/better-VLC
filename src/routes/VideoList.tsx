import VideoThumbnail from "@/components/general/VideoThumbnail";
import Section from "@/components/general/Section";
import { Video } from "@/lib/types";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type propTypes = {
   title: string;
   icon: LucideIcon;
   videos: Video[];
   contentClassName: string;
};

export default function VideoList({ title, icon, videos, contentClassName }: propTypes) {
   return (
      <Section icon={icon} title={title}>
         <div className={cn("flex items-center flex-wrap gap-5", contentClassName)}>
            {videos.map((vid) => (
               <VideoThumbnail video={vid} key={vid.id} />
            ))}
         </div>
      </Section>
   );
}
