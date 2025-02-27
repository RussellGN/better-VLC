import { useParams } from "react-router";

export default function Watch() {
   const { "*": pathToVideo } = useParams();
   return (
      <div>
         <div className="relative bg-dark-dark border border-white/30">
            <div className="flex gap-2 absolute z-10 text-sm top-0 left-0 bg-primary-dark shadow-lg   rounded-ee px-1">
               <p>Watch </p>
               <p className="text-secondary-dark w-[200px] overflow-hidden text-ellipsis text-nowrap">{pathToVideo}</p>
            </div>

            <div className="h-[80vh] mx-auto  flex items-center justify-center ">
               <video
                  src={"file://" + pathToVideo}
                  width={800}
                  height={450}
                  className="h-full w-auto "
                  controls
               ></video>
            </div>
         </div>

         <div className="text-center p-5 flex items-center justify-center">playback controls</div>
      </div>
   );
}
