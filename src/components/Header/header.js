// import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import {
//   Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,
//   DropdownItem,CardImg, Card, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


// import LogIn  from "../login";

// import SignUp from "../signup";

// const cursorPoint = {
//   "cursore":"pointer"
// }

//  class Header extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false,
//       modal:false
//     };
//   }
//   toggleModal = () =>{
//     this.setState({
//       modal:!this.state.modal
//     })
//   }
  
  
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
//   render() {
//     return (
//       <Card>
//         <Navbar color="light" light expand="md">
//           <NavbarBrand href="/">BookMyParty</NavbarBrand>
//           <NavbarToggler onClick={this.toggle} />
//           <Collapse isOpen={this.state.isOpen} navbar>


//             <Nav className="ml-auto" navbar>
//               <NavItem>
//                 <NavLink onClick={this.toggleModal} Style={cursorPoint}>
//                   LogIn
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink onClick={this.toggleModal} Style={cursorPoint}>
//                 SignUp
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="/vendors">Vendors</NavLink>
//               </NavItem>

//             </Nav>
//           </Collapse>
//         </Navbar>

//         <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
//           <ModalHeader toggle={this.toggleModal} charCode="x">Modal title</ModalHeader>
//           <ModalBody>

//             <LogIn/>

            
         
//           </ModalBody>



//           <ModalFooter>
           
//             <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
//           </ModalFooter>
//         </Modal>



      


        
//         <CardImg  width="90%" src="https://www.hkcec.com/sites/default/files/imce/CHall3.jpg" alt="Card image cap" />
//         </Card>
//     );
//   }
// }
// export default Header