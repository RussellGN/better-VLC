import Section from "@/components/general/Section";
import VideoThumbnail from "@/components/general/VideoThumbnail";
import { videos } from "@/lib/sampleData";
import { FolderOpen } from "lucide-react";
import { useParams, useSearchParams } from "react-router";

export default function FolderView() {
   const { "*": pathToFolder } = useParams();
   const [searchParams] = useSearchParams();
   const folderTitle = searchParams.get("title");

   return (
      <div>
         <p className="text-sm italic px-2 text-nowrap overflow-hidden text-ellipsis text-secondary-default">
            {pathToFolder}
         </p>
         <Section icon={FolderOpen} title={`Showing Videos in ${folderTitle}`}>
            <div className="flex items-center flex-wrap gap-3">
               {videos.map((vid) => (
                  <VideoThumbnail video={vid} key={vid.id} />
               ))}
               {videos.map((vid) => (
                  <VideoThumbnail video={vid} key={vid.id} />
               ))}
            </div>
         </Section>
      </div>
   );
}
