import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router";
import Home from "./routes/Home";

export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route index element={<Home />} />
         </Routes>
      </BrowserRouter>
   );
}
