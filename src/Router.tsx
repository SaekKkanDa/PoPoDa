import CocoPlayground from "@Pages/coco/CocoPlayground";
import HomePage from "@Pages/home/HomePage";
import JunPlayground from "@Pages/jun/JunPlayground";
import SeoltangPlayground from "@Pages/seoltang/SeoltangPlayground";
import SooyaPlayground from "@Pages/sooya/SooyaPlayground";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seoltang" element={<SeoltangPlayground />} />
        <Route path="/coco" element={<CocoPlayground />} />
        <Route path="/sooya" element={<SooyaPlayground />} />
        <Route path="/jun" element={<JunPlayground />} />
      </Routes>
    </BrowserRouter>
  );
}
