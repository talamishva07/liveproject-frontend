import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './componet/Dashboard';
import Navbar from './componet/Navbar';
import Learnmore from './componet/Learnmore';
import Addblog from './componet/Addblog';
import Contact from './componet/Contact';
import About from './componet/About';
import List from './componet/List';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Dashboard /> } />
          <Route path='/learn' element={ <Learnmore /> } />
          <Route path='/addblog' element={ <Addblog /> } />
          <Route path='/contact' element={ < Contact /> } />
          <Route path='/About' element={ < About /> } />
          <Route path='/list' element={ <List /> } />

        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
