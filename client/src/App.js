import React, { useState} from 'react';
  ///*** think this would be fine to erase {useState} ******/
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


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

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  //here we declare the state boolean variable "loggedIn" and a function to update it.
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <ApolloProvider client={client}>
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
  </ApolloProvider>
  );
}

export default App;
