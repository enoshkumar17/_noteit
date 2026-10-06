import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Archive } from "./pages/Archive";
import { Important } from "./pages/Important";
import { Bin } from "./pages/Bin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/important" element={<Important />} />
      <Route path="/bin" element={<Bin />} />
    </Routes>
  );
}

export default App;
