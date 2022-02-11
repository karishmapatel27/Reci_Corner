import React from "react";
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,  Route, Routes, Link} from "react-router-dom"
import Home  from './pages/Home'
import  Register  from './pages/Register'
import  LogIn from "./pages/LogIn"
import  Footer from './components/Footer'

const App = () => {
  return (   
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={ <Home />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/login" element={<LogIn />} exact />
          </Routes>
      </Router>
  );
}

export default App;
