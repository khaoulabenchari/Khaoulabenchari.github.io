import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
