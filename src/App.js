import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/notfound/NotFound';
import EducationCertification from './pages/education/education';
function App() {
  return (
    <>
      <BrowserRouter>
    <Header/>
    <div className='pb-16'>
        <Routes>
          <Route path="/" element={<About />}  />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<EducationCertification />} />
          <Route path="/blog" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
