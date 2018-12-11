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
import Header from "./components/Header/header";

import HallPage from "./components/halls";
import { Navbar } from "reactstrap";


const Home = () => <h2>Home</h2>

const AppRouter = () => (        
  <Router>
    <div>

      <Header/>
      <Navbar>
      
            <Link to="/"></Link>
           
          
          <Link to="/Login"></Link>
          
          
             <Link to="/SignUp"></Link>
             
 

             <Link to="/vendors" ></Link> 

             <Link to="/halls">hall</Link>
           
        
      </Navbar>


         
            
          <Route path="/" exact component ={Home} />

          <Route path="/" exact component={CatDrop}/>

          <Route path="/" exact component={Location}/>


          <Switch>
       

      <Route path="/Login" exact component={Login}/>   
      
      <Route path="/signUp" exact component={SignUp}/> 


      <Route path ="/vendors" exact component={VendorsList}/>
      <Route path ="/vendors/:id" exact component={ViewOneVendor} />
      <Route path="/vendors/add" exact component={AddVendors} /> 

      <Route path ="/vendors/edit/:id" exact component= {EditVendors}/>

      
<Route path="/halls" exact component={HallPage} />
      
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

