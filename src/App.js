import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Thankyou from "./Thankyou";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="thankyou" element={<Thankyou />} />
      </Routes>
    </div>
  );
}

export default App;
