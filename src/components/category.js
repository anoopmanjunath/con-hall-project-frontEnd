 import React from 'react';
//import { Dropdown } from 'reactstrap';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class CatDrop extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  

render(){
  return(
     
      <Dropdown className="button" onClick={this.showDropdownMenu}> Category>
    <DropdownToggle caret>
    Any
  </DropdownToggle>

       {/* <option value=" ">Any</option> */}
       <DropdownMenu>
      
       <DropdownItem Corporate Event>Corporate Event</DropdownItem>
       <DropdownItem Marriage>Marriage</DropdownItem>
       <DropdownItem Engagement>Engagement</DropdownItem>
       <DropdownItem Birthday Party>Birthday Party</DropdownItem>
       <DropdownItem Cocktail Party>Cocktail Party</DropdownItem>
       </DropdownMenu>
      
       </Dropdown>
       

    // <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
    //     <DropdownToggle caret>
    //       Dropdown
    //     </DropdownToggle>
    //     <DropdownMenu>
    //       <DropdownItem header>Header</DropdownItem>
    //       <DropdownItem disabled>Action</DropdownItem>
    //       <DropdownItem>Another Action</DropdownItem>
    //       <DropdownItem divider />
    //       <DropdownItem>Another Action</DropdownItem>
    //     </DropdownMenu>
    //   </Dropdown>
  )
}
  
 }

export default CatDrop;