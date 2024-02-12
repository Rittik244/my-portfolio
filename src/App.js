import './App.css';
import Home from './routes/Home';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import About from './routes/About';
import Skills from './routes/Skills';
import Memories from './routes/Memories';
import Error from './routes/Error';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/memories' element={<Memories />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </>
  );
}

export default App;