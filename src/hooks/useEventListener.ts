import { listen } from "@tauri-apps/api/event";
import { toast } from "sonner";

export default function useEventListener() {
   listen("media-search-started", (e) => {
      console.log(e);
      toast(JSON.stringify(e));
   });

   listen<number>("media-load-count", (e) => {
      console.log({ e, payload: e.payload });
      toast(JSON.stringify(e));
   });

   listen("media-save-started", (e) => {
      console.log(e);
      toast(JSON.stringify(e));
   });

   listen<number>("media-search-save-ended", (e) => {
      console.log({ e, payload: e.payload });
      toast(JSON.stringify(e));
   });
}
