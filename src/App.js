import React from "react";  
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import Users from "./components/user";
//import Location from "./components/location";
import CatDrop from "./components/category";
//import Cati from "./components/cat";

import Login from "./components/login";
import SignUp from "./components/signup";

import Vendors from "./components/vendors";

const Home = () => <h2>Home</h2>

const AppRouter = () => (        
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li> 
          <li> 
          <Link to="/Login">LogIn</Link>
          </li>
          <li>
             <Link to="/SignUp">SignUp</Link>
            </li>
           </ul>


             <Link to="/vendors"> Vendors</Link> 
            
        
      </nav>


         
            
          <Route path="/" exact component ={Home} />

          <Route path="/" exact component={CatDrop}/>
      
      <Route path="/Login" exact component={Login}/>   
      
      <Route path="/signUp" exact component={SignUp}/> 

      <Route path="/vendors" exact component={Vendors} />

    </div>
  </Router>
);

export default AppRouter;

