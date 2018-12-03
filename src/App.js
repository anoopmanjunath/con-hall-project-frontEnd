import React from "react";  
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import axios from "axios";
//import Users from "./components/user";
//import Location from "./components/location";
import CatDrop from "./components/category";
//import Cati from "./components/cat";

import Login from "./components/login";






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
          {/* <li>
            {/* <Link to="/SignUp">SignUp</Link>
            </li>

            <li><Link to="/Vendors"> Vendors</Link>
            </li> */}
        </ul> */}
      </nav>


          {/* <CatDrop />  */}
         
            
           
      <Route path="/" exact component={CatDrop} />
      
      <Route path="/Login" exact component={Login}/>   
      
      {/* <Route path="/signUp" exact component={SignUp}/> 

      <Route path="/vendors" exact component={Vendors} /> */}

    </div>
  </Router>
);

export default AppRouter;

