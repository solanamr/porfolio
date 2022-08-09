import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/projects' element={<Projects />} />
    <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
