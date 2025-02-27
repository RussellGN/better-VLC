import { BACKEND_COMMANDS, VIDEOS_KEY } from "@/lib/constants";
import { Video } from "@/lib/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { invoke } from "@tauri-apps/api/core";

export default function useVideos() {
   const {
      data: videos,
      error: getError,
      isLoading,
   } = useQuery<Video[], string>({
      queryKey: VIDEOS_KEY,
      queryFn: () => invoke<Video[]>(BACKEND_COMMANDS.getVideos),
   });

   const {
      mutate: refresh,
      error: refreshError,
      isPending,
   } = useMutation<unknown, string>({
      mutationFn: () => invoke(BACKEND_COMMANDS.loadAndSaveNewMedia),
   });

   const e1 = getError ? "| Error getting videos: " + getError + " |" : "";
   const e2 = refreshError ? "| Error getting videos: " + refreshError + " |" : "";

   // console.log({ videos, getError, refreshError, isLoading, isPending, refresh });

   return { videos, error: e1 + e2, isLoading: isLoading || isPending, refresh };
}
