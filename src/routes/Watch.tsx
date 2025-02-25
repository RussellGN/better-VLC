import { useParams } from "react-router";

export default function Watch() {
   const { "*": pathToVideo } = useParams();

   return (
      <div>
         <h1>Watch </h1>
         <h2 className="text-primary-default">{pathToVideo}</h2>
      </div>
   );
}
