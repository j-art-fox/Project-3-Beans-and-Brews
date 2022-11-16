import Navbar from "./components/Nav/Navbar";
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import OrderOnline from './components/pages/OrderOnline';
import OurCoffee from './components/pages/OurCoffee';
import { Navigate, Switch, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/order' element={<OrderOnline/>} />
        <Route path='/ourcoffee' element={<OurCoffee/>} />
      </Routes>
    </div>
    <Footer />
  </>
  );
}

export default App;
