import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Main from './Pages/Main'
import Basket from './Pages/Basket'
import Search from './Pages/Search'
import Category from './Pages/Category'
import Details from './Pages/Details'
import Navbar from './components/Navbar'
import Foods from './Pages/Foods'
import About from './Pages/About'
import Footer from './components/Footer'


function App() {

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Foods" element={<Foods />} />
        <Route path="/About" element={<About />} />
        <Route path="/Basket" element={<Basket />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
