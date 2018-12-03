 import React from 'react';
//import { Dropdown } from 'reactstrap';



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
    <label>
      <select className="button" onClick={this.showDropdownMenu}> Category>
      <option value=" ">Select</option>
      
      <option value="Corporate Event">Corporate Event</option>
      <option value="Marriage">Marriage</option>
      <option value="Engagement">Engagement</option>
      <option value="Birthday Party">Birthday Party</option>
      <option value="Cocktail Party">Cocktail Party</option>
      
      </select>
      </label>
  )
}
  
 }

export default CatDrop;