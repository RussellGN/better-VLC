import VideoThumbnail from "@/components/general/VideoThumbnail";
import Section from "@/components/general/Section";
import { Video } from "@/lib/types";
import { LucideIcon, RefreshCcw, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import Spinner from "@/components/general/Spinner";
import { Button } from "@/components/ui/button";

type propTypes = {
   title: string;
   icon: LucideIcon;
   videos: Video[] | undefined;
   contentClassName?: string;
   error?: string | undefined;
   isLoading?: boolean;
   refresh?: () => void;
};

export default function VideoList({ title, icon, videos, contentClassName, error, isLoading, refresh }: propTypes) {
   return (
      <Section
         icon={icon}
         title={title}
         actions={
            <div>
               <Button onClick={refresh} variant="primary" size="icon">
                  <RefreshCcw />
               </Button>
            </div>
         }
      >
         <div className="flex flex-col items-center justify-center text-center gap-3">
            {error ? (
               <>
                  <TriangleAlert /> {error}
                  <Button onClick={refresh} variant="primary" size="icon">
                     <RefreshCcw />
                  </Button>
               </>
            ) : isLoading ? (
               <>
                  <Spinner /> Loading, please wait...
               </>
            ) : videos?.length === 0 ? (
               <>
                  0 videos found
                  <Button onClick={refresh} variant="primary" size="icon">
                     <RefreshCcw />
                  </Button>
               </>
            ) : (
               <div
                  className={cn(
                     "w-full text-left flex justify-around items-center pe-2 flex-wrap gap-5",
                     contentClassName,
                  )}
               >
                  {videos?.map((vid, index) => <VideoThumbnail video={vid} key={vid.id + "-" + index} />)}
               </div>
            )}
         </div>
      </Section>
   );
}
