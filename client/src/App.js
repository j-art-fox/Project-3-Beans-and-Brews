import React, { useState} from 'react';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';


import Navbar from "./components/Nav/Navbar";
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import OrderOnline from './components/pages/OrderOnline';
import OurCoffee from './components/pages/OurCoffee';
import Contact from './components/pages/Contact';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Account/Dashboard';
import Rewards from './components/pages/Account/Rewards';
import Settings from './components/pages/Account/Settings';
import { Route, Routes, Navigate } from "react-router-dom";


function App() {
  //here we declare the state boolean variable "loggedIn" and a function to update it.
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
    <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/order' element={<OrderOnline/>} />
        <Route path='/ourcoffee' element={<OurCoffee/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/account' element={<Navigate to= "/dashboard"/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/rewards' element={<Rewards/>} />
        <Route path='/settings' element={<Settings/>} />
        <Route path='/Register' element={<Register/>} />
      </Routes>
    </div>
    <Footer />
  </>
  );
}

export default App;
