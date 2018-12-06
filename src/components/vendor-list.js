import React from 'react';
import axios from 'axios';
import VendorTable from './vendor-table';
import { Link } from 'react-router-dom';

class VendorsList extends React.Component {
    constructor(props) {
      super(props); 
        this.state = {
          vendors: []
      }
    }
  
    componentDidMount() {
      axios.get('http://localhost:3001/vendors').then((response) => {
        this.setState({vendors: response.data});
      });
    }
  
    render() {
      return (
        <div>
          <VendorTable vendor_details={this.state.vendors}/><br/>
          
          <button><Link to='/vendors/add'>Add</Link></button>
        </div>
      )
    }
  } 

  export default VendorsList

    