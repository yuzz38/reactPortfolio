import './styles/main.css'
import './styles/reset.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Project from './pages/Projects';
import Contact from './pages/Contact';
import Info from './pages/Info';
import ScrollToTop from './utils/ScrollToTop';


import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/project' element={<Project />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/info/:id' element={<Info />}/>
        </Routes>
        
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
