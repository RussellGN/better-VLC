import { useParams } from "react-router";

export default function Watch() {
   const { "*": pathToVideo } = useParams();

   return (
      <div>
         <div className="relative bg-dark-dark border border-white/30">
            <div className="flex gap-2 absolute top-0 left-0 bg-primary-dark shadow-lg   rounded-ee p-2">
               <p>Watch </p>
               <p className="text-secondary-dark">{pathToVideo}</p>
            </div>

            <div className="h-[80vh] mx-auto  flex items-center justify-center ">Video Player</div>
         </div>

         <div className="text-center p-5 flex items-center justify-center">playback controls</div>
      </div>
   );
}
