import { Routes, Route } from 'react-router';

import PageWrap from './global/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Crafts from './pages/Crafts';
import Wicked from './pages/projects/Wicked';
import Yogurt from './pages/projects/Yogurt';
// import Catoro from './pages/projects/Catoro';
import SavetheOcean from './pages/projects/SavetheOcean';
import StyleGuide from "./pages/StyleGuide";
import PageNotFound from "./pages/404Page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageWrap />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/crafts" element={<Crafts />} />
          <Route path="/wicked" element={<Wicked />} />
          <Route path="/yogurt" element={<Yogurt />} />
          {/* <Route path="/catoro" element={<Catoro />} /> */}
          <Route path="/savetheocean" element={<SavetheOcean />} />
          <Route path="*"  element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;