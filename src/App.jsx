import { Routes, Route } from 'react-router';

import PageWrap from './global/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Logo from './pages/Logo';
import Wicked from './pages/projects/Wicked';
import Yogurt from './pages/projects/Yogurt';
import Catoro from './pages/projects/Catoro';
import StyleGuide from "./pages/StyleGuide";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageWrap />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/wicked" element={<Wicked />} />
          <Route path="/yogurt" element={<Yogurt />} />
          <Route path="/catoro" element={<Catoro />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;