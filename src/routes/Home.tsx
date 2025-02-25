import Section from "@/components/general/Section";
import VideoThumbnail from "@/components/general/VideoThumbnail";
import Folder from "@/components/general/Folder";
import { folders, videos } from "@/lib/sampleData";
import { FolderOpen, History } from "lucide-react";

export default function Home() {
   return (
      <div>
         <Section icon={History} title="Recent media">
            <div className="flex items-center overflow-x-auto gap-3 ">
               {videos.splice(0, 6).map((vid) => (
                  <VideoThumbnail video={vid} key={vid.id} />
               ))}
            </div>
         </Section>

         <Section icon={FolderOpen} title="Folders (video)">
            <div className="flex items-start flex-wrap gap-10 max-h-[50vh] overflow-y-auto">
               {folders.map((folder) => (
                  <Folder folder={folder} key={folder.id} />
               ))}
            </div>
         </Section>
      </div>
   );
}
