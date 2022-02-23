import React from "react";
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,  Route, Routes} from "react-router-dom"
import Home  from './components/pages/Home'
import  Register  from './components/pages/Register'
import  LogIn from "./components/pages/LogIn"
import  Footer from './components/Extra_Components/Footer'
import AddRecipe from './components/pages/AddRecipe'
import ViewRecipe from './components/Extra_Components/ViewRecipe'
import EditRecipe from './components/Extra_Components/EditRecipe'
import NotFound from './components/Extra_Components/NotFound'
import Cookies from 'universal-cookie'

const App = () => {
  let cookies = new Cookies();
  return (   
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={ <Home cookies={cookies}/>} exact />
          <Route path="/addrecipe" element={ <AddRecipe cookies={cookies}/>  } exact />
          <Route path="/view/:id" element={ <ViewRecipe cookies={cookies}/> } exact />
          <Route path="/edit/:id" element={ <EditRecipe cookies={cookies}/> } exact />
          <Route path="/register" element={<Register cookies={cookies}/>} exact />
          <Route path="/login" element={<LogIn cookies={cookies}/>} exact />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      <Footer/>
      </Router>
  );
}

export default App;
