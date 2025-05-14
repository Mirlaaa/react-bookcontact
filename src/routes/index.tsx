import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import { Create } from "../pages/create";
import { Edit } from "../pages/edit";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
}
