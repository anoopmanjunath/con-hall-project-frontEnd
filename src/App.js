import React from "react";  
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Switch} from 'react-router-dom';
//import Users from "./components/user";
import Location from "./components/location";
//import CatDrop from "./components/category";
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


import { Container, Row, Col } from 'reactstrap';

import { CardImg } from "reactstrap";
import LogIn from "./components/login";



const Home = () => <h2> </h2>

const AppRouter = () => (        
  <Router>
    <div>

      {/* <Header/> */}
      <Navbar>
<Container>
        <Row>
          <Col xs="6" sm="4">   <Link to="/">BookMyParty</Link> </Col>
        </Row>
      <Row>
      <Col xs="6" sm="4">
      <Link to="/halls" >Hall</Link>
      </Col>
        </Row>
           
          <Row>
          <Col xs="6" sm="4">  <Link to="/Login">LogIn</Link>
          /
          <Link to="/SignUp">SignUp</Link>
         /
          <Link to="/vendors" >Vendors </Link> </Col>
         
           </Row>
          

             {/* <Link to="/halls">hall</Link> */}
           </Container>
        
      </Navbar>

 {/* <CardImg  width="90%" src="https://www.hkcec.com/sites/default/files/imce/CHall3.jpg" alt="Card image cap" />
           */}
            
          <Route path="/" exact component ={Home} />

          {/* <Route path="/" exact component={CatDrop}/> */}

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

