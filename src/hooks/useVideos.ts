import { useReactQueryClient } from "@/components/providers/ReactQueryProvider";
import { BACKEND_COMMANDS, QUERY_KEYS } from "@/lib/constants";
import { Video } from "@/lib/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { invoke } from "@tauri-apps/api/core";
import { useEffect } from "react";
import { toast } from "sonner";

export default function useVideos() {
   const client = useReactQueryClient();

   const {
      data: videos,
      error: getError,
      isLoading,
      refetch: fetchVideos,
   } = useQuery<Video[], string>({
      enabled: false,
      queryKey: QUERY_KEYS.videosKey,
      queryFn: () => invoke<Video[]>(BACKEND_COMMANDS.getVideos),
   });

   const {
      mutate: refresh,
      error: refreshError,
      isPending,
   } = useMutation<Video[], string>({
      mutationFn: () => invoke<Video[]>(BACKEND_COMMANDS.loadAndSaveNewMedia),
      onSuccess(data) {
         client.setQueryData(QUERY_KEYS.videosKey, data);
      },
      onError(e) {
         console.log(e);
         toast.error(e);
      },
   });

   useEffect(() => {
      fetchVideos();
   }, []);

   const e1 = getError ? "| Error getting videos: " + getError + " |" : "";
   const e2 = refreshError ? "| Error getting videos: " + refreshError + " |" : "";

   // console.log({ videos, getError, refreshError, isLoading, isPending, refresh });

   return { videos, error: e1 + e2, isLoading: isLoading || isPending, refresh };
}
