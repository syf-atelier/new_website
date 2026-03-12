import { Route, Routes } from "react-router-dom";
import Home from '@/pages/Home';
import Minecraft from "@/pages/Minecraftpg";
import Ark from "@/pages/Ark"
import Palworld from "@/pages/Palworld"
import Comunidad from "@/pages/Comunidad"
import Nosotros from "@/pages/Nosotros"
import Blog from "./pages/Blog"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Minecraft" element={<Minecraft />} />
      <Route path="/Ark" element={<Ark />} />
      <Route path="Palworld/" element={<Palworld />} />
      <Route path="Comunidad/" element={<Comunidad />} />
      <Route path="Nosotros/" element={<Nosotros />} />
      <Route path="Blog/" element={<Blog />} />
    </Routes>
  );
}

export default App;
