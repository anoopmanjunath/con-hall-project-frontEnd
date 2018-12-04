import React from "react";  
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Switch} from 'react-router-dom';
//import Users from "./components/user";
import Location from "./components/location";
import CatDrop from "./components/category";
//import Cati from "./components/cat";


import Login from "./components/login";
import SignUp from "./components/signup";
import EditVendors from "./components/vendor-edit";
import AddVendors from "./components/vendors";

import VendorsList from "./components/vendor-list";
import ViewOneVendor from "./components/show-one-vendor";



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


             <Link to="/vendors/add"> Vendors</Link> 
            
        
      </nav>


         
            
          <Route path="/" exact component ={Home} />

          <Route path="/" exact component={CatDrop}/>

          <Route path="/" exact component={Location}/>
          <Switch>
      <Route path="/Login" exact component={Login}/>   
      
      <Route path="/signUp" exact component={SignUp}/> 

      <Route path="/vendors/add" exact component={AddVendors} />

      <Route path ="/vendors" exact component={VendorsList}/>

      <Route path ="/vendors/edit/:id" exact component= {EditVendors}/>

      <Route path ="/vendors/:id" exact component={ViewOneVendor} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

