import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Main from './Pages/Main'
import Basket from './Pages/Basket'
import Search from './Pages/Search'
import Details from './Pages/Details'
import Navbar from './components/Navbar'
import Foods from './Pages/Foods'
import About from './Pages/About'
import Footer from './components/Footer'
import Area from './Pages/Area';

function App() {

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Details/:id" element={<Details />} />
        <Route path="/Search/:serch" element={<Search />} />
        <Route path="/Foods/:nameCategory" element={<Foods />} />
        <Route path="/About" element={<About />} />
        <Route path="/Basket" element={<Basket />} />
        <Route path="/Area/:area" element={<Area />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
