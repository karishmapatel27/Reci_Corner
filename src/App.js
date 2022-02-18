import React from "react";
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,  Route, Routes} from "react-router-dom"
import Home  from './components/pages/Home'
import  Register  from './components/pages/Register'
import  LogIn from "./components/pages/LogIn"
import  Footer from './components/pages/Footer'
import AddRecipe from './components/pages/AddRecipe'
import ViewRecipe from './components/Extra_Components/ViewRecipe'
import EditRecipe from './components/Extra_Components/EditRecipe'


const App = () => {
  return (   
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={ <Home />} exact />
          <Route path="/addrecipe" element={ <AddRecipe /> } exact />
          <Route path="/view/:id" element={ <ViewRecipe /> } exact />
          <Route path="/edit/:id" element={ <EditRecipe /> } exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/login" element={<LogIn />} exact />
        </Routes>
      <Footer/>
      </Router>
  );
}

export default App;
