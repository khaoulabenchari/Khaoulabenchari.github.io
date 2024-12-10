import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './pages/notfound/NotFound';

function App() {
  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
