import { Route, Routes } from 'react-router-dom';
import Resume from './page/Resume';
import Blog from './page/Blog';
import Contact from './page/Contact';
import Home from './page/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="personal-website" element={<Home/>} />
        <Route path="resume" element={<Resume/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
