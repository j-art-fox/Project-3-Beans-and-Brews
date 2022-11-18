import Navbar from "./components/Nav/Navbar";
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import OrderOnline from './components/pages/OrderOnline';
import OurCoffee from './components/pages/OurCoffee';
import Contact from './components/pages/Contact'
import Dashboard from './components/pages/Account/Dashboard';
import { Route, Routes } from "react-router-dom";


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
        <Route path='/contact' element={<Contact/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </div>
    <Footer />
  </>
  );
}

export default App;
