import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Bob from "./components/Projects/Details/bb";
import Crypto from "./components/Projects/Details/cypto";
import Dolar from "./components/Projects/Details/dolar";
import Filmbox from "./components/Projects/Details/filmbox";
import Pf from "./components/Projects/Details/PF";
import Pi from "./components/Projects/Details/PI";
import Weather from "./components/Projects/Details/weather";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/project/food" element={<Pi />} />
    <Route path="/project/concerteck" element={<Pf />} />
    <Route path="/project/weatherApp" element={<Weather />} />
    <Route path="/project/bobsBurgers" element={<Bob />} />
    <Route path="/project/crypto" element={<Crypto />} />
    <Route path="/project/dolar" element={<Dolar />} />
    <Route path="/project/filmbox" element={<Filmbox />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
