import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
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
import { Route, Routes } from "react-router-dom";

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
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// function App() {
//   return (
//     <ApolloProvider client={client}> .   
//       <Router>
//         <>
//           <Navbar />
//           <Switch>
//             <Route exact path="/" component={SearchBooks} />
//             <Route exact path="/saved" component={SavedBooks} />
//             <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
//           </Switch>
//         </>
//       </Router>
//     </ApolloProvider>
//   );
// }


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
        <Route path='/Register' element={<Register/>} />
      </Routes>
    </div>
    <Footer />
  </>
  );
}

export default App;
