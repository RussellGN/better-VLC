import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router";
import Home from "./routes/Home";
import Settings from "./routes/Settings";
import Watch from "./routes/Watch";
import RootLayout from "./components/general/RootLayout";

export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<RootLayout />}>
               <Route index element={<Home />} />
               <Route path="settings" element={<Settings />} />
               <Route path="watch/*" element={<Watch />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}
